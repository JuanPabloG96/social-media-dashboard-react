import { statusColor } from "../js/const"

export function MediaCard({ id, title, socialMediaName, socialMediaIcon, username, count, status, statusNumber, statusIcon, cardBackground, textWhiteBlack }) {
  return (
    <article className={`flex flex-col w-full overflow-hidden rounded-[4px] ${cardBackground} ${textWhiteBlack}`} key={id} >

      <div className={`w-full h-1 bg-${socialMediaName}`}></div>
      <div className="flex flex-col justify-center items-center gap-5 p-5">
        <div className="flex items-center justify-center gap-2">
          <img src={socialMediaIcon} alt={socialMediaName + " icon"} width="20px" />
          <span className="text-xs text-gray-400 font-semibold">@{username}</span>
        </div>

        <div className="flex flex-col justify-center items-center gap-1">
          <h3 className={"text-4xl font-bold " + textWhiteBlack}>{count}</h3>
          <span className="text-[14px] text-desaturatedBlueText tracking-[4px]">{title}</span>
        </div>

        <div className="flex justify-center items-center gap-1">
          <img src={statusIcon} alt="status icon" />
          <span className={`text-xs font-semibold ${statusColor[status]}`}>{statusNumber}</span>
        </div>
      </div>

    </article>
  )
}