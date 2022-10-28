import React from 'react';
import Tool2 from '../../assets/Tool2.jpg';

export default function ExploreTool({ tool }) {
  const annotationsField = tool.Annotations[0];
  console.log(annotationsField);
  // const renderAnnotations = annotationsField.map((annotation) => (
  //   <tr id={annotation.key}>
  //     <td>{annotation.key}</td>
  //     <td>{annotation.value}</td>
  //   </tr>
  // ));
  const returnNull = (field) => {
    if (field === '' || field === null) {
      return 'Missing!';
    }
    return field;
  };

  const returnClass = (field) => {
    if (field === '' || field === null) {
      return 'missing';
    }
    return '';
  };

  return (
    <div className="explore--tools--container">
      <img className="tool--card--img" src={Tool2} alt={tool.name} />
      <div className="left--container">
        <h3 className="tool--name">
          {tool.name}
        </h3>
        <p>
          <span>Description: </span>
          {tool.description}
        </p>
        <p>
          <span>Author: </span>
          {tool.Author}
        </p>
        <p>
          <span>Category: </span>
          {tool.category}
        </p>
        <p>
          <span>Source Code : </span>
          <a href={tool.link} target="_blank" rel="noreferrer"> Check here </a>
        </p>
      </div>
      <div className="right--container">
        <table className="explore--tools--tbl">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className={returnClass(annotationsField.icon)}>
              <td>icon</td>
              <td>{returnNull(annotationsField.icon)}</td>
            </tr>
            <tr className={returnClass(annotationsField.feedback_url)}>
              <td>feedback_url</td>
              <td>{returnNull(annotationsField.feedback_url)}</td>
            </tr>
            <tr className={returnClass(annotationsField.license)}>
              <td>license</td>
              <td>{returnNull(annotationsField.license)}</td>
            </tr>
            <tr className={returnClass(annotationsField.privacy_policy)}>
              <td>privacy_policy</td>
              <td>{returnNull(annotationsField.privacy_policy)}</td>
            </tr>
            <tr className={returnClass(annotationsField.replaced_by)}>
              <td>replaced_by</td>
              <td>{returnNull(annotationsField.replaced_by)}</td>
            </tr>
            <tr className={returnClass(annotationsField.api_docs_url)}>
              <td>api_docs_url</td>
              <td>{returnNull(annotationsField.api_docs_url)}</td>
            </tr>
            <tr className={returnClass(annotationsField.for_wikis)}>
              <td>for_wikis</td>
              <td>{returnNull(annotationsField.for_wikis)}</td>
            </tr>
          </tbody>
          <tfoot className="explore--tfoot">
            <tr>
              <td colSpan="3">
                Fields With red background are missing!
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
