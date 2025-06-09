const SkillbarItem = ({ skill, percentage, color }) => {
  return (
    <div className='mb-6'>
      <div className='flex justify-between text-sm text-gray-800 mb-2'>
        <p>{skill}</p>
        <p>{percentage}%</p>
      </div>
      <div className='bg-gray-300 rounded-full h-2.5'>
        <div
          style={{ width: `${percentage}%` }}
          className={`rounded-full h-2.5 transition-all duration-500 ${color}`}
        ></div>
      </div>
    </div>
  )
}
export default SkillbarItem