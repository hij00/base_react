export const Subject = ({ sub }) => {
  console.log(sub[0].subjectTitle);
  return (
    <div>
      <h3>수업 과목: {sub[0].subjectTitle}</h3>
      <h3>수업 과목: {sub[1].subjectTitle}</h3>
      <h3>수업 과목: {sub[2].subjectTitle}</h3>
      <h3>수업 과목: {sub[3].subjectTitle}</h3>
      <h3>수업 과목: {sub[4].subjectTitle}</h3>
    </div>
  );
};
