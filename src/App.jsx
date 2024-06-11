import { MediaCard } from "./components/MediaCard"
import { OverviewCard } from "./components/OverviewCard"

export function App() {
  return (
    <>
      <section className="mx-auto my-4 w-[100%] max-w-[750px] flex flex-col gap-10 items-center">
        <MediaCard
          id={1}
          title={"FOLLOWERS"}
          socialMediaName={"facebook"}
          imageUrl={"images/icon-facebook.svg"}
          username={"Juan Pablo"}
          count={"2351"}
          status={"1025 Today"}
          statusIcon={"images/icon-up.svg"}
        />
      </section>
    </>
  )
}