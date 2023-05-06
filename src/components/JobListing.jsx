function JobListing(props) {
  const { jobTitle, company, img, tags, notifications, timePosted, role, placement, onFilter } = props;

  return (
    <div className="joblisting">
      {notifications.featured ? <div className="notification-bar"></div> : <></>}
      <div className="img-container">
        <img src={img} alt={company} width="60px" />
      </div>


      <div className="about-job">
        <div>
          <span className="company">{company}</span>
          {notifications.new ? <span className="notification new">NEW!</span> : <></>}
          {notifications.featured ? <span className="notification featured">FEATURED</span> : <></>}
          <h3 className="jobtitle">{jobTitle}</h3>
        </div>

        <div className="information">
          <span>{timePosted}</span>
          <span>&middot;</span>
          <span>{role}</span>
          <span>&middot;</span>
          <span>{placement}</span>
        </div>
      </div>

      <div className="tags">
        {tags.map(tag => (
          <span
            key={tag}
            className="tag"
            onClick={() => onFilter(tag)}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default JobListing;