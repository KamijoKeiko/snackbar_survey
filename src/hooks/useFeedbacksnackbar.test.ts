import {renderHook, waitFor} from '@testing-library/react'
import {useFeedbackSnackbar} from "./useFeedbackSnackbar";
import {describe} from "vitest";


describe("useFeedbackSnackbar", () => {
  describe("初期状態", () => {
    it("スナックバーは非表示", () => {
      const {result} = renderHook(() => useFeedbackSnackbar());
      expect(result.current.openSnackbar).toBe(false);

    })
  })
  describe("severity", () => {
    beforeEach(() => {
    jest.useFakeTimers(); // Jestのタイマーを偽装する
  });
    it("success", async () => {
      const {result} = renderHook(() => useFeedbackSnackbar());
      result.current.showSnackbar("message", "success");
      await waitFor(() => expect(result.current.openSnackbar).toBe(true))

      expect(result.current.openSnackbar).toBe(true);
      expect(result.current.snackbarMessage).toBe("message");
      expect(result.current.snackbarSeverity).toBe("success");

      jest.advanceTimersByTime(2000);

    })
  })
})


export function add(x: number, y: number): number {
  return x + y;
}


describe('add function', () => {
  it('adds two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});
