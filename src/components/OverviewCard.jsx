import { statusColor } from "../js/const"

export function OverviewCard({ id, title, socialMediaName, socialMediaIcon, count, status, statusNumber, statusIcon, cardBackground, textWhiteBlack }) {
  return (
    <article className={`p-5 rounded-[4px] w-full flex flex-col justify-between gap-5 ${cardBackground} ${textWhiteBlack}`} key={id}>
      <div className="flex justify-between items-start">
        <h4 className="text-desaturatedBlueText">{title}</h4>
        <img src={socialMediaIcon} alt={socialMediaName + " icon"} />
      </div>

      <div className="flex justify-between items-end">
        <span className={textWhiteBlack + " text-xl font-bold"}>{count}</span>
        <div className="flex justify-center items-center gap-1">
          <img src={statusIcon} alt="status icon" />
          <span className={`text-sm ${statusColor[status]}`}>{statusNumber}%</span>
        </div>
      </div>
    </article>
  )
}