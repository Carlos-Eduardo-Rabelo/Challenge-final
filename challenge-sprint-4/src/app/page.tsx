export default function Home () {
  return (
    <div>
      <div className="linha"></div>
        <div className="bem-vindo">
          <div>
            <h1 className="titulo">Bem-vindo à Conserta Fácil</h1>
            <p className="paragrafo">
            Na Conserta Fácil, estamos comprometidos em transformar a 
            experiência de manutenção automotiva. Somos uma empresa 
            dedicada a oferecer uma solução prática, eficiente e confiável 
            para quem busca mais agilidade e transparência nos cuidados 
            com o veículo. Combinando inovação tecnológica e excelência 
            em atendimento, nosso objetivo é facilitar o processo de 
            reparação automotiva, desde o diagnóstico até a finalização 
            do serviço.
            </p>
          </div>
        
          <Image src={motor} alt="Foto de motor" className="img-bv w-[50%]"/>
        </div>
      </div>  
    </div>  
  )
}