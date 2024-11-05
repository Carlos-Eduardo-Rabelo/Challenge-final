import motor from "@/img/motor.jpg"
import porto from "@/img/logos/porto.png"
import oxiace from "@/img/logos/oxiace.png"
import fiap from "@/img/logos/fiap.png"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="main">
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
      
      <nav className="parceiras" id="parceiros">
        <h1 className="titulo">Conheça nossos parceiros</h1>
        <div className="links">
              <Link href="https://www.portoseguro.com.br">
                <Image src={porto} alt="Logo da Porto Seguro" className="logo-parceira"/>
              </Link>
              <Link href="https://www.oxigenioaceleradora.com.br">
                <Image src={oxiace} alt="Logo da Porto Seguro" className="logo-parceira"/>
              </Link>
              <Link href="https://www.fiap.com.br/institucional/#conceito">
                <Image src={fiap} alt="Logo da Porto Seguro" className="logo-parceira"/>
              </Link>
        </div>

              

      </nav>
      <div className="sobre" id="sobre">
        <h1 className="titulo">Quem Somos
        </h1>
        <p className="paragrafo">
        Nosso objetivo é oferecer a você uma solução adequada para os problemas do seu veículo. Desde a
        identificação do problema até a conclusão da manutenção, pode contar conosco para oferecer a você
        confiança, cuidado e atenção que até hoje nenhuma plataforma fez igual! Você que já é cliente
        Porto faça seu login ou, se ainda não é, realize já o seu cadastro!
        </p>
        <h1 className="titulo">Nossa Solução</h1>
        <p className="paragrafo">
        A Conserta Fácil oferece uma plataforma completa, desenvolvida para atender todas as suas necessidades automotivas de forma simples e eficaz:
        </p>
        <ul>
          <li>Auto Diagnóstico: Permite identificar possíveis problemas no seu veículo com base nas informações fornecidas, sem a necessidade de intervenção humana.</li>
          <li>Auto Orçamento: Receba um orçamento detalhado com o custo estimado de peças, mão de obra e o tempo necessário para o conserto, tudo gerado de forma automatizada.</li>
          <li>Agendamento Prático: Agende sua manutenção no centro automotivo mais próximo, de forma rápida e sem complicações.</li>
          <li>Resgate/Guincho: Solicite assistência imediata em caso de emergência com apenas um clique. Nosso sistema localiza sua posição e aciona o guincho mais próximo.</li>
          <li>Gestão de Usuários: Gerencie facilmente seu cadastro, histórico de manutenções e orçamentos, para facilitar futuros atendimentos.</li>
        </ul>
      </div>
      <div className="visao">
        <h1 className="titulo">Nossa Visão</h1>
        <p className="paragrafo">
          Queremos ser a solução de confiança para motoristas de todo o país. Nossa visão é simplificar e otimizar o processo de manutenção veicular, proporcionando uma experiência prática e transparente em todas as etapas, do diagnóstico ao conserto. Com o uso de tecnologia avançada, buscamos redefinir a forma como as pessoas cuidam de seus veículos.
        </p>
      </div>
      <div className="valores">
        <h1 className="titulo">Nossos Valores</h1>
        <div className="grid grid-cols-2">
          <div>
            <h2 className="subtitulo">1. Transparência</h2>
            <p className="paragrafo-valores">
            Informamos cada detalhe do processo, desde o diagnóstico até o orçamento, para que você tenha total confiança nos serviços prestados.
            </p>
          </div>
          <div>
            <h2 className="subtitulo">2.Eficiência</h2>
            <p className="paragrafo-valores">
            Oferecemos soluções rápidas e assertivas para garantir que seu veículo volte à estrada no menor tempo possível.
            </p>
          </div>
          <div>
            <h2 className="subtitulo">3.Inovação</h2>
            <p className="paragrafo-valores">
            Estamos sempre atualizando nossas ferramentas e processos para garantir que nossos clientes tenham acesso ao que há de mais moderno em tecnologia automotiva.
            </p>
          </div>
          <div>
            <h2 className="subtitulo">4.Confiabilidade</h2>
            <p className="paragrafo-valores">
            Mais do que prestar serviços de reparação, queremos ser seu parceiro de confiança na manutenção do seu veículo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}