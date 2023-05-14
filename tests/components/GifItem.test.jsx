import { render, screen } from "@testing-library/react";
import GifGridItem from "../../src/components/GifGridItem";

describe("Pruebas en <GifItem/>", () => {
  const title = "Saitama";
  const url = "https://one-punch.com/saitama.jpg";

  test("debe hacer match con el snapshot", () => {
    const { container } = render(<GifGridItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe msotrar la imagen con el URL y el ALT indicado", () => {
    render(<GifGridItem title={title} url={url} />);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });
});
