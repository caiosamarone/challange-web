import { Card } from 'antd'

import { IGym } from '~/interfaces'

const { Meta } = Card

import randomImagesGyms from '~/utils/random-images-gyms'

interface GymCardProps extends IGym.Item {
  onCheckIn: (title: string, id: string) => void
}

export const GymCard = ({ phone, title, onCheckIn, id }: GymCardProps) => {
  const randomImage =
    randomImagesGyms[Math.floor(Math.random() * randomImagesGyms.length)]

  return (
    <Card
      hoverable
      onClick={() => onCheckIn(title, id)}
      className="w-[240px] h-[285px]"
      cover={<img alt="img" src={randomImage} className="h-40" />}
    >
      <Meta
        title={title}
        className="truncate font-notosans"
        description={
          <div className="flex flex-col gap-2">
            <p className="truncate font-notosans">{phone}</p>
            <p className="truncate font-notosans">
              📍 {Math.floor(Math.random() * 10) + 1}km de distância
            </p>
          </div>
        }
      />
    </Card>
  )
}
