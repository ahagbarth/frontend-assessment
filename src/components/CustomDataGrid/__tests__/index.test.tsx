import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CustomDataGrid from "../CustomDataGrid";
import { useWorldData } from "@/contexts/WorldDataContext/WorldDataContext";
import { mockCountry, mockWorldData } from "../__mocks__/worldDataMock";

vi.mock("@/contexts/WorldDataContext/WorldDataContext");

const mockUseWorldData = useWorldData as unknown as ReturnType<typeof vi.fn>;

describe("CustomDataGrid", () => {
  it("shows loading spinner when loading", () => {
    mockUseWorldData.mockReturnValue(mockWorldData({ loading: true }));
    render(<CustomDataGrid />);

    const loadingSpinner = screen.getByTestId("loading-spinner");
    expect(loadingSpinner).toBeVisible();
  });

  it("shows error message when error", () => {
    mockUseWorldData.mockReturnValue(
      mockWorldData({ error: new Error("Failed to fetch data") })
    );
    render(<CustomDataGrid />);

    const errorMessage = screen.getByTestId("error-message");
    expect(errorMessage).toBeVisible();
  });

  it("renders DataGrid with data when loaded", () => {
    mockUseWorldData.mockReturnValue(
      mockWorldData({
        data: [mockCountry(), mockCountry({ code: "ES", name: "Spain" })],
      })
    );
    render(<CustomDataGrid />);

    expect(screen.getByText("United States")).toBeInTheDocument();
    expect(screen.getByText("Spain")).toBeInTheDocument();
  });

  it("renders empty grid when data is empty", () => {
    mockUseWorldData.mockReturnValue(mockWorldData({ data: [] }));
    render(<CustomDataGrid />);

    expect(screen.getByText(/no rows/i)).toBeInTheDocument();
  });

  it("renders empty grid when data is null", () => {
  // @ts-expect-error: testing null data case
  mockUseWorldData.mockReturnValue(mockWorldData({data: null}));
  render(<CustomDataGrid />);

  expect(screen.getByText(/no rows/i)).toBeInTheDocument();
});

  it("renders all column headers", () => {
    mockUseWorldData.mockReturnValue(mockWorldData({ data: [mockCountry()] }));
    render(<CustomDataGrid />);

    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/capital/i)).toBeInTheDocument();
    expect(screen.getByText(/currency/i)).toBeInTheDocument();
    expect(screen.getByText(/continent/i)).toBeInTheDocument();
  });

  it("matches snapshot when loaded", () => {
  mockUseWorldData.mockReturnValue(mockWorldData({data: [mockCountry()]}));
  const { asFragment } = render(<CustomDataGrid />);
  expect(asFragment()).toMatchSnapshot();
});
});
