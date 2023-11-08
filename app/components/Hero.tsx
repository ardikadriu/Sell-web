import Image from "next/image";
import Glasses from "@/public/Glasses.png";

const Hero = () => {
  return (
    <div
      className=" flex w-[1180px] h-[752px] justify-between items-center "
      id="Firstcontainer"
    >
      {" "}
      <div className="">
        <div>
          <h1 className="font-bold text-[28px]">Kasia Avaiator</h1>
          <p className="w-[320px] leading-[26px] text-[16px]">
            Imagina unos lentes de sol absolutamente impresionantes, diseñados
            para aquellos que buscan una combinación perfecta entre estilo y
            funcionalidad
          </p>
          <div className="mt-2.5 text-[16px]">
            <p>
              Precio habitual:{" "}
              <span className="line-through font-semibold">$4,420.00 MXN</span>
            </p>
            <p>
              Precio de oferta:
              <span className="font-semibold"> $3,770.00 MXN</span>
            </p>
          </div>
          <button className="w-[170px] h-[46px] border-2 border-black mt-[50px] leading-[26px]">
            Comprar
          </button>
          <div className="flex mt-[166px] ml-[148px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 9L12 17L20 9L18 7L12 13L6 7L4 9Z"
                fill="black"
              />
            </svg>
            <h1>Detalles del producto</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center" id="Second-container">
        <Image src={Glasses} width={487} height={244} alt="glasses" />
        <div className="flex w-[146px] justify-between mt-[51px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15 4L7 12L15 20L17 18L11 12L17 6L15 4Z"
              fill="black"
            />
          </svg>
          <h2> Imagen 1 </h2>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9 4L17 12L9 20L7 18L13 12L7 6L9 4Z"
              fill="black"
            />
          </svg>
        </div>
      </div>{" "}
    </div>
  );
};

export default Hero;
