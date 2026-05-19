import { describe, it, expect, beforeEach } from "vitest";

import { renderHook, act } from "@testing-library/react";
import { modalStore } from "@/src/store/modalStore";

describe("Modal Store", () => {
  beforeEach(() => {
    modalStore.getState().setOpen(false);
  });

  it("should init with value false", () => {
    const { result } = renderHook(() => modalStore.getState());
    expect(result.current.open).toBe(false);
  });

  it("should open and close the modal", () => {
    const { result } = renderHook(() => modalStore());

    act(() => {
      result.current.setOpen(true);
    });

    expect(result.current.open).toBe(true);
  });

  it("should toggle the modal", () => {
    const { result } = renderHook(() => modalStore());

    act(() => {
      result.current.toggleOpen();
    });

    expect(result.current.open).toBe(true);

    act(() => {
      result.current.toggleOpen();
    });

    expect(result.current.open).toBe(false);
  });
});
