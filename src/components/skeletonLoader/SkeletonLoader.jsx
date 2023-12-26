import './skeletonLoader.css'

export const SkeletonLoader = () => {
  return (
    <div className='skeletonLoader__card'>
      <div className='skeletonLoader__card-image'></div>
      <div className='skeletonLoader__card-subContainer'>
        <div className='skeletonLoader__card-content'></div>
        <div className='skeletonLoader__card-content'></div>
        <div className='skeletonLoader__card-content'></div>
      </div>
    </div>
  )
}
