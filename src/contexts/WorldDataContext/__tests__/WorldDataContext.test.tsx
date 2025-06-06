import { describe, it, expect, vi, beforeEach, Mock } from "vitest";
import { render, screen } from "@testing-library/react";
import { useQuery } from "@apollo/client";
import { useWorldData, WorldDataProvider } from "../WorldDataContext";

// Mock Apollo Client's useQuery
vi.mock("@apollo/client", async () => {
  const actual = await vi.importActual<Mock>("@apollo/client");

  return {
    ...actual,
    useQuery: vi.fn(),
  };
});

const Consumer = () => {
  const { data, loading, error } = useWorldData();

  return (
    <div>
      <div data-testid="data">{JSON.stringify(data)}</div>
      <div data-testid="loading">{String(loading)}</div>
      <div data-testid="error">{error ? error.message : ""}</div>
    </div>
  );
};

describe("WorldDataContext", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("provides loading state", () => {
    (useQuery as Mock).mockReturnValue({
      data: undefined,
      loading: true,
      error: null,
    });
    render(
      <WorldDataProvider>
        <Consumer />
      </WorldDataProvider>
    );

    expect(screen.getByTestId("loading").textContent).toBe("true");
  });

  it("provides error state", () => {
    (useQuery as Mock).mockReturnValue({
      data: undefined,
      loading: false,
      error: new Error("Apollo error"),
    });
    render(
      <WorldDataProvider>
        <Consumer />
      </WorldDataProvider>
    );

    expect(screen.getByTestId("error").textContent).toBe("Apollo error");
  });

  it("provides data when loaded", () => {
    const mockCountries = [
      { code: "US", name: "United States" },
      { code: "CA", name: "Canada" },
    ];
    (useQuery as Mock).mockReturnValue({
      data: { countries: mockCountries },
      loading: false,
      error: null,
    });
    render(
      <WorldDataProvider>
        <Consumer />
      </WorldDataProvider>
    );

    expect(screen.getByTestId("data").textContent).toContain("United States");
    expect(screen.getByTestId("data").textContent).toContain("Canada");
    expect(screen.getByTestId("loading").textContent).toBe("false");
    expect(screen.getByTestId("error").textContent).toBe("");
  });

  it("provides empty array if no data", () => {
    (useQuery as Mock).mockReturnValue({
      data: undefined,
      loading: false,
      error: null,
    });
    render(
      <WorldDataProvider>
        <Consumer />
      </WorldDataProvider>
    );

    expect(screen.getByTestId("data").textContent).toBe("[]");
  });

  it("provides empty array if countries is null", () => {
    (useQuery as Mock).mockReturnValue({
      data: { countries: null },
      loading: false,
      error: null,
    });
    render(
      <WorldDataProvider>
        <Consumer />
      </WorldDataProvider>
    );

    expect(screen.getByTestId("data").textContent).toBe("[]");
  });
});
