import React from "react";
import "./index.css";

const filtersearch = (searchKey) => (item) => {
  if (item.id)
    return item.full_name.toLowerCase().includes(searchKey.toLowerCase());
};

const ProjectList = ({ data, searchKey }) => (
  <div className='projectList'>
    {data.filter(filtersearch(searchKey)).map((item) => (
      <div key={item.id} className='col s12 l4 project-img'>
        <a href={item.html_url}>
          <img
            src={`https://gh-card.dev/repos/${item.full_name}.svg`}
            alt='project thumbnail'
          />
        </a>
      </div>
    ))}
  </div>
);

export default ProjectList;
