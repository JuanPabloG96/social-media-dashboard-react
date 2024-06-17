import { statusColor } from "../js/const"

export function MediaCard({ data, theme }) {
  return (
    <article className={`flex flex-col w-full overflow-hidden rounded-[4px] cursor-pointer ${theme["cardBackground"]} ${theme["textWhiteBlack"]} ${theme["cardHover"]}`} >

      <div className={`w-full h-1 bg-${data.socialMediaName}`}></div>
      <div className="flex flex-col justify-center items-center gap-5 p-5">
        <div className="flex items-center justify-center gap-2">
          <img src={data.socialMediaIcon} alt={data.socialMediaName + " icon"} width="20px" />
          <span className="text-xs text-gray-400 font-semibold">@{data.username}</span>
        </div>

        <div className="flex flex-col justify-center items-center gap-1">
          <h3 className={"text-4xl font-bold " + theme["textWhiteBlack"]}>{data.count}</h3>
          <span className="text-[14px] text-desaturatedBlueText tracking-[4px]">{data.title}</span>
        </div>

        <div className="flex justify-center items-center gap-1">
          <img src={data.statusIcon} alt="status icon" />
          <span className={`text-xs font-semibold ${statusColor[data.status]}`}>{data.statusNumber}</span>
        </div>
      </div>

    </article>
  )
}