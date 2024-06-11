export function MediaCard({ title, socialMediaName, imageUrl, username, count, status, statusIcon }) {
  return (
    <article className={`flex flex-col w-full max-w-[280px] overflow-hidden rounded-[4px] bg-darkDesaturatedBlue text-whiteText font-Inter`} >
      <div className={`w-full h-1 bg-${socialMediaName}`}></div>
      <div className="flex flex-col justify-center items-center gap-5 p-5">
        <div className="flex items-center justify-center gap-2">
          <img src={imageUrl} alt={socialMediaName + " icon"} width="20px" />
          <span className="text-xs text-gray-400 font-semibold">@{username}</span>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h3 className="text-4xl font-bold">{count}</h3>
          <span className="text-xs font-thin text-gray-400 tracking-[4px]">{title}</span>
        </div>

        <div className="flex justify-center items-center gap-1">
          <img src={statusIcon} alt="status icon" />
          <span className={"text-xs font-semibold text-lime"}>{status}</span>
        </div>
      </div>
    </article>
  )
}