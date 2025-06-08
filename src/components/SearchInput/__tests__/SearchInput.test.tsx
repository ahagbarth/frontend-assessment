import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { useWorldData } from "@/contexts/WorldDataContext/WorldDataContext";
import SearchInput from "../SearchInput";

vi.mock("@/contexts/WorldDataContext/WorldDataContext");

const mockUseWorldData = useWorldData as unknown as ReturnType<typeof vi.fn>;

describe("SearchInput", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders input with correct placeholder and value", () => {
    mockUseWorldData.mockReturnValue({
      filter: "test",
      setFilter: vi.fn(),
    });
    render(<SearchInput/>);

    const input = screen.getByPlaceholderText(/search countries/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("test");
  });

  it("calls setFilter on input change", () => {
    const setFilter = vi.fn();
    mockUseWorldData.mockReturnValue({
      filter: "",
      setFilter,
    });
    render(<SearchInput />);
    
    const input = screen.getByPlaceholderText(/search countries/i);
    fireEvent.change(input, { target: { value: "Spain" } });
    expect(setFilter).toHaveBeenCalledWith("Spain");
  });

  it("does not throw if setFilter is undefined", () => {
    mockUseWorldData.mockReturnValue({
      filter: "",
      setFilter: undefined,
    });
    render(<SearchInput />);
    const input = screen.getByPlaceholderText(/search countries/i);
    expect(() => {
      fireEvent.change(input, { target: { value: "France" } });
    }).not.toThrow();
  });
});