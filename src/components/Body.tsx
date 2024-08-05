import Gif from '../assets/Gif.webp'
import Card from './Card'

const Body = () => {
  return (
    <div className="flex flex-col items-center">
      <div
        style={{
          backgroundImage: `url(${Gif})`
        }}
        className="bg-cover bg-center w-[40vw] h-[20vh] mt-10"
      ></div>

      <h1 className="text-[140px] font-bold">ToDo</h1>

      <button className="rounded-full bg-black text-white font-bold px-8 py-2 text-lg mt-5">
        Iniciar sesion
      </button>
      <h2 className="text-[40px] font-bold w-3/6 text-center mt-10">
        El mejor lugar para todas tus tareas, recordatorios, objetivos y mucho
        más.
      </h2>
      <div className="p-5 flex flex-col gap-16 h-[75vh] w-full items-center mt-10">
        <Card
          img="https://www.icloud.com/system/icloud.com/2420Hotfix12/06b68855764eb0e23f269ed4ef7935f0.png"
          title="Fácil acceso a las apps o los datos de tu iPhone desde la web"
          text="iCloud es fundamental para mantener toda la información personal de tus dispositivos segura, actualizada y disponible estés donde estés. En iCloud.com, puedes acceder a tus fotos, archivos y mucho más desde cualquier navegador web. Los cambios que hagas se sincronizarán en tu iPhone y en otros dispositivos para que estés siempre al día."
          width="500px"
          height="200px"
        />
        <Card
          img="	https://www.icloud.com/system/icloud.com/2420Hotfix12/7cb9ecdad2b384754de394732519f658.png"
          title="Más espacio de almacenamiento y funciones adicionales para proteger tu privacidad"
          text="Amplía a iCloud+ para conseguir más espacio de almacenamiento y funciones adicionales como “Relay privado de iCloud”, “Ocultar mi correo electrónico” y “Vídeo seguro de HomeKit”. También puedes compartir tu suscripción con tus familiares. Más información en apple.com/icloud."
          width="350px"
          height="253px"
        />
      </div>
    </div>
  )
}

export default Body
