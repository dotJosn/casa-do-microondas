import AutoCarosel from "./ui/components/autoCarousel";

export default function Home() {
  return (
    <section>
      <AutoCarosel
        contents={
          [
            ["brastemp", "/img/brastemp.png", 1],
            ["consul", "/img/consul.png", 2],
            ["philco", "/img/philco.png", 3],
            ["lg", "/img/lg.png", 4],
            ["electrolux", "/img/electrolux.png", 5],
            ["panasonic", "/img/panasonic.png", 6],
            ["samsung", "/img/samsung.png", 7],
          ]
        }
      />
    </section>
  )
}