export function OverviewCard({ key, title, socialMediaName, icon, count, status, statusIcon }) {
  return (
    <article className="p-5 rounded-sm flex flex-col justify-between" key={key}>
      <div className="flex justify-between items-start">
        <h4>{title}</h4>
        <img src={icon} alt={socialMediaName + " icon"} />
      </div>

      <div className="flex justify-between items-end">
        <span>{count}</span>
        <div>
          <img src={statusIcon} alt="status icon" />
          <span>{status}</span>
        </div>
      </div>
    </article>
  )
}