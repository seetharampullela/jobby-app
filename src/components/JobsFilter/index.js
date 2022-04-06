import Profile from '../Profile'
import './index.css'

const JobsFilter = props => {
  const getEmploymentTypeList = () => {
    const {employmentTypesList} = props

    return employmentTypesList.map(each => {
      const {changeEmploymentType} = props
      const onChangeEmployType = event =>
        changeEmploymentType(event.target.value)

      return (
        <li
          className="checkbox-list-items"
          key={each.employmentTypeId}
          onChange={onChangeEmployType}
        >
          <input
            type="checkbox"
            className="check-radio"
            id={each.employmentTypeId}
            value={each.employmentTypeId}
          />
          <label htmlFor={each.employmentTypeId} className="check-label">
            {each.label}
          </label>
        </li>
      )
    })
  }

  const renderEmploymentType = () => (
    <div className="salary-container">
      <h1 className="salary-heading">Type of Employment</h1>
      <ul className="salary-range-container">{getEmploymentTypeList()}</ul>
    </div>
  )

  const getSalaryRangeList = () => {
    const {salaryRangesList} = props

    return salaryRangesList.map(salary => {
      const {changeSalaryRange} = props
      const onChangeSalary = () => changeSalaryRange(salary.salaryRangeId)

      return (
        <li
          className="checkbox-list-items"
          key={salary.salaryRangeId}
          onChange={onChangeSalary}
        >
          <input
            type="radio"
            className="check-radio"
            id={salary.salaryRangeId}
            name="salary"
          />
          <label htmlFor={salary.salaryRangeId} className="check-label">
            {salary.label}
          </label>
        </li>
      )
    })
  }

  const renderSalaryRange = () => (
    <div className="salary-container">
      <h1 className="salary-heading">Salary Range</h1>
      <ul className="salary-range-container">{getSalaryRangeList()}</ul>
    </div>
  )

  return (
    <div className="job-filter-group">
      <Profile />
      <hr className="horizontal-line" />
      {renderEmploymentType()}
      <hr className="horizontal-line" />
      {renderSalaryRange()}
    </div>
  )
}

export default JobsFilter
