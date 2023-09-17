

const BtnLR = ({BtnName, submit}) => {
  return (
    <div className="mt-3 mb-10">
      
        <button type={submit} className="py-2 px-4 bg-red-500 rounded text-white text-lg font-mono hover:bg-red-700 duration-300">{BtnName}</button>
    </div>
  )
}

export default BtnLR