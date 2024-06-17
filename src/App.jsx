import { useEffect, useState } from "react"
import { MediaCard } from "./components/MediaCard"
import { OverviewCard } from "./components/OverviewCard"
import { Switcher } from "./components/ui/Switcher"
import { useFetch } from "./js/useFetch"
import { URL } from "./js/const"

export function App() {
  const data = useFetch(URL)
  const [lightTheme, setLightTheme] = useState(false)

  const appBackground = lightTheme ? "bg-WhiteBg" : "bg-veryDarkBlue"
  const textWhiteBlack = lightTheme ? "text-veryDarkBlueText" : "text-whiteText"
  const cardBackground = lightTheme ? "bg-lightGrayishBlue" : "bg-darkDesaturatedBlue"

  return (
    <>
      <article className={"px-48 py-9 w-[100%] flex flex-col gap-10 items-center " + appBackground}>
        <header className="w-full font-bold">
          <div>
            <h1 className={"text-2xl " + textWhiteBlack}>Social Media Dashboard</h1>
            <span>Total Followers: 23,004</span>
          </div>
          <hr className="my-3 bg-desaturatedBlueText h-[1px] border-none" />
          <div className="flex justify-between items-center">
            <span>Dark Mode</span>
            <Switcher lightTheme={lightTheme} setLightTheme={setLightTheme} />
          </div>
        </header>

        <section className="w-full grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
          {data?.mediaData.map((data) => (
            <MediaCard
              id={data.id}
              title={data.title}
              socialMediaName={data.socialMediaName}
              socialMediaIcon={data.socialMediaIcon}
              username={data.username}
              count={data.count}
              status={data.status}
              statusNumber={data.statusNumber}
              statusIcon={data.statusIcon}
              cardBackground={cardBackground}
              textWhiteBlack={textWhiteBlack}
            />
          ))}
        </section>

        <section className="w-full flex flex-col gap-5">
          <h2 className={"text-2xl font-bold " + textWhiteBlack}>Overview - Today</h2>
          <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
            {data?.overviewData.map((data) => (
              <OverviewCard
                id={data.id}
                title={data.title}
                socialMediaName={data.socialMediaName}
                socialMediaIcon={data.socialMediaIcon}
                count={data.count}
                status={data.status}
                statusNumber={data.statusNumber}
                statusIcon={data.statusIcon}
                cardBackground={cardBackground}
                textWhiteBlack={textWhiteBlack}
              />
            ))}
          </div>
        </section>
      </article>
    </>
  )
}