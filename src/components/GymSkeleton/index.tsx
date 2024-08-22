import RLSkeleton from 'react-loading-skeleton'

export const GymSkeleton = () => {
  return (
    <div className="mt-6 max-h-[25rem] overflow-auto md:grid lg:grid-cols-3 md:grid-cols-2 gap-y-[1.5rem] flex flex-col align-center">
      <RLSkeleton width={240} height={285} />
      <RLSkeleton width={240} height={285} />
      <RLSkeleton width={240} height={285} />
      <RLSkeleton width={240} height={285} />
      <RLSkeleton width={240} height={285} />
      <RLSkeleton width={240} height={285} />
    </div>
  )
}
