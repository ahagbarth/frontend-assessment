import { describe, it, expect, beforeEach, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { WorldDataProvider } from "../WorldDataContext";
import { GET_COUNTRIES } from "../queries";
import CustomDataGrid from "@/components/CustomDataGrid";
import { mockMultiplePages, mockWorldDataContext } from "../__mocks__/mockWorldDataContext";




describe("WorldDataContext integration", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders loading, then data from Apollo", async () => {
    render(
      <MockedProvider mocks={mockWorldDataContext} addTypename={false}>
        <WorldDataProvider>
          <CustomDataGrid />
        </WorldDataProvider>
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("United States")).toBeInTheDocument();
      expect(screen.getByText("Canada")).toBeInTheDocument();
    });
  });

  it("renders empty grid when no countries are returned", async () => {
    const mocksWithNoCountries = [
      {
        request: { query: GET_COUNTRIES },
        result: { data: { countries: [] } },
      },
    ];

    render(
      <MockedProvider mocks={mocksWithNoCountries} addTypename={false}>
        <WorldDataProvider>
          <CustomDataGrid />
        </WorldDataProvider>
      </MockedProvider>
    );

    await waitFor(() => {
      // Adjust this selector/message to match your DataGrid's empty state
      expect(screen.getByText(/no rows/i)).toBeInTheDocument();
    });
  });

  it("renders error from Apollo", async () => {
    const errorMocks = [
      {
        request: { query: GET_COUNTRIES },
        error: new Error("Network error!"),
      },
    ];

    render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <WorldDataProvider>
          <CustomDataGrid />
        </WorldDataProvider>
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId("error-message")).toBeInTheDocument();
      expect(
        screen.getByText(/There has been an error fetching the data.../i)
      ).toBeInTheDocument();
    });
  });

  it("matches snapshot when loaded", async () => {
    const { asFragment } = render(
      <MockedProvider mocks={mockWorldDataContext} addTypename={false}>
        <WorldDataProvider>
          <CustomDataGrid />
        </WorldDataProvider>
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("United States")).toBeInTheDocument();
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it("paginates rows", async () => {
    render(
      <MockedProvider mocks={mockMultiplePages} addTypename={false}>
        <WorldDataProvider>
          <CustomDataGrid />
        </WorldDataProvider>
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Country0")).toBeInTheDocument();
    });

    expect(screen.getByText("Country0")).toBeInTheDocument();
    expect(screen.getByText("Country9")).toBeInTheDocument();
    expect(screen.queryByText("Country100")).not.toBeInTheDocument();

    const nextPageButton = screen.getByLabelText(/Go to next page/i);
    fireEvent.click(nextPageButton);

    await waitFor(() => {
      expect(screen.getByText("Country100")).toBeInTheDocument();
    });
  });
});
