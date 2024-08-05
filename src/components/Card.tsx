type CardProps = {
  img: string
  title: string
  text: string
  width: string
  height: string
}

const Card = ({ img, title, text, width, height }: CardProps) => {
  return (
    <div className="shadow-2xl p-10 w-[60vw] rounded-xl gap-5 flex flex-col items-center">
      <div
        style={{
          backgroundImage: `url(${img})`,
          width: width,
          height: height
        }}
        className="bg-cover bg-center  rounded-xl "
      ></div>
      <div className="flex flex-col gap-5">
        <p className="text-[28px] font-bold">{title}</p>
        <p className="text-[17px] ">{text}</p>
      </div>
    </div>
  )
}

export default Card
