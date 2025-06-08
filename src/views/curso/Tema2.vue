<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Medio de vida'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5.align-items-center 
      .col-lg-5.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/36.png", data-aos="zoom-in") 

      .col-lg-7
        p(data-aos="fade-down") Los medios de vida son las formas como las familias y los hogares pueden desarrollarse, mantenerse y suplir todos los requerimientos necesarios para que cada miembro pueda tener lo necesario y suficiente, para desarrollarse y afrontar cualquier situación del entorno.

        .bg-color-1.p-4.mb-4(data-aos="fade-up") 
          p(data-aos="fade-down").mb-0 Proteger, fortalecer y recuperar los medios de vida en la ruralidad y las familias campesinas, es sumamente relevante para permitir que tanto adultos como niños, puedan tener un proyecto de vida digna, suficiente para lograr sus proyectos y potente para alcanzar un desarrollo integral.
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Cualidades de los medios de vida

    p(data-aos="fade-down") Cuando los medios de vida están garantizados, protegidos y sostenibles, los proyectos familiares progresan, aumentan la resiliencia de las personas y comunidades, reduciendo su vulnerabilidad a desastres, la inseguridad alimentaria y la pobreza; a la vez, los proyectos de vida contribuyen a su empoderamiento y dignidad personal. 

    p(data-aos="fade-down") Dentro de las #[b cualidades positivas de un medio de vida], se encuentran:

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-4.p-3.mb-2(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/43.svg")
            .col-lg
              p.mb-0 Suelen integrar a todos los miembros de la comunidad y la familia, sin discriminar por género, edad, personalidad o condición de salud. 
        .bg-color-4.p-3.mb-2(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/44.svg")
            .col-lg
              p.mb-0 Generan metas o propósitos a corto, mediano y largo plazo, enriqueciendo los proyectos individuales y comunes.
        .bg-color-4.p-3(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/45.svg")
            .col-lg
              p.mb-0 Definen la integralidad de cada miembro: salud, educación, desarrollo cultural, vivienda. En casos de familias con grupos de adultos y adolescentes, los medios de vida también aportan a sus futuros profesionales, laborales o campos de subsistencia.                                
      .col-lg-4 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/42.png", data-aos="zoom-in")      

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Componentes de los medios de vida

    p(data-aos="fade-down") Para conocer sobre esta temática, lo invitamos a ver el siguiente video.

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-left")
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/E_fZRzOD6bE?si=3GE4DTRlIaZUg2-D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Los medios de vida y su incidencia en las infancias rurales

    .row.mb-5.align-items-center           
      .col-lg-9.mb-3.mb-lg-0 
        p(data-aos="fade-down") Países como Colombia, en donde los contextos rurales hacen frente a realidades socioeconómicas, culturales y políticas que determinan y ponen en riesgo el nivel de desarrollo y oportunidades con medios de vida suficientes, la niñez y la juventud enfrentan circunstancias que inciden directamente sobre su desarrollo integral y los proyectos de vida.  

        .bg-color-9.p-4(data-aos="fade-left")
          p(data-aos="fade-down").mb-0 La niñez rural se enfrenta a cotidianidades y rutinas que suelen estar condicionada por los medios de vida de sus familias, convirtiéndolos en “adultos” a una temprana edad, con responsabilidades asociadas al trabajo, al cuidado de parientes menores o mayores y las tareas domésticas.
      .col-lg-3
        figure
          img.img-a.img-t(src="@/assets/curso/temas/46.png", data-aos="zoom-in")    

    p(data-aos="fade-down") En ese sentido, los medios de vida de las familias contribuyen, de manera significativa, a la identidad, a los sueños de los niños y la participación de ellos en la sociedad. Dentro de los otros factores que son condicionados por los medios de vida, están:

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/47.png")             
            .col-lg-7
              h5 Nutrición infantil
              p Calidad, disponibilidad, suficiencia en los alimentos, de acuerdo con la edad y la actividad física.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/48.png")             
            .col-lg-7
              h5 Acceso a sistemas de salud
              p Desde la edad inicial, incluyendo el acceso a vacunación, atención por profesionales del sistema de salud, medicamentos, vitaminas, etc.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/49.png")             
            .col-lg-7
              h5 Acceso al sistema educativo
              p Reconociendo la trascendencia de las instituciones educativas, la calidad en la educación, la distancia y los medios de transporte entre las instituciones y la vivienda de los menores; la disponibilidad y cualificación de maestros, los recursos pedagógicos y didácticos disponibles, etc.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/50.png")             
            .col-lg-7
              h5 Participación cultural, artística, recreación, deportes
              p Y otras actividades, dirigidas a la formación integral.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/51.png")             
            .col-lg-7
              h5 El sistema de cuidado
              p Siendo inicialmente responsabilidad parental y familiar, pero que, en circunstancias especiales, está determinada por otros adultos responsables o las entidades a cargo de la protección de los menores y sus derechos.                                                        
    #t_2_4.titulo-segundo(data-aos="flip-up")
    h2 #[span 2.4] Medios de subsistencia

    p(data-aos="fade-down") Los medios incluyen las habilidades, los activos (tanto materiales como sociales) y las actividades necesarias para que se alcancen los medios de vida. La subsistencia es sustentable cuando puede enfrentarse y recuperarse del estrés y la crisis y mantener o mejorar su capacidad y activos en el presente y el futuro.

    p(data-aos="fade-down") Varios factores pueden incidir en la subsistencia pues son como un sistema que interactúa entre sí:

    .row.mb-5.align-items-center.justify-content-center.align-items-stretch.text-center           
      .col-lg-3.mb-3.mb-lg-0 
        .custom-image-card-2.h-100.br-1
          img.custom-image-card__image(src="@/assets/curso/temas/52.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0 Los bienes a los que las personas acuden.
      .col-lg-3.mb-3.mb-lg-0 
        .custom-image-card-2.h-100.br-1
          img.custom-image-card__image(src="@/assets/curso/temas/53.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0 Estrategias que desarrollan para ganarse la vida (empleos, servicios, empredimientos).
      .col-lg-3.mb-3.mb-lg-0 
        .custom-image-card-2.h-100.br-1
          img.custom-image-card__image(src="@/assets/curso/temas/54.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0 Contexto social (rural) en el que se desarrolla el sustento.
      .col-lg-3.mb-3.mb-lg-0 
        .custom-image-card-2.h-100.br-1
          img.custom-image-card__image(src="@/assets/curso/temas/55.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0 Factores que hacen que la subsistencia sea menos vulnerable a las crisis.

    .row.mb-5.align-items-center           
      .col-lg-8.mb-3.mb-lg-0 
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/56.svg")
            .col-lg
              p.mb-0 Los #[b medios de subsistencia rural], incluyen la agricultura, ganadería y otras actividades productivas familiares. Estudios diversos como el de Segui, García & Hernández (2016), confirman que los medios de subsistencia rural inciden de manera significativa en la vida de la infancia que crece en estos contextos. Esta incidencia puede ser positiva o negativa, dependiendo de factores socioeconómicos, culturales y familiares.
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/57.png", data-aos="zoom-in")                                                    
    p(data-aos="fade-down") Por otra parte, la participación de niños y niñas dentro de las actividades productivas y roles de sus parientes, con tareas que puedan realizar desde su condición, puede fortalecer habilidades y valores, respeto hacia el otro y responsabilidades valiosas en su formación integral.

    p(data-aos="fade-down") Dentro de los impactos negativos, se destacan:

    .row.align-items-start.mb-5 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/58.png", alt="")          
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="El Trabajo infantil y abandono escolar")
            p Dado que, en zonas rurales, es común que los niños participen en actividades productivas desde muy temprana edad, teniendo como consecuencia que asuman responsabilidades prematuras, el efecto sobre su rendimiento escolar, el ausentismo, cansancio y el abandono escolar.
            p De manera adicional, esta condición incide en la economía familiar y el círculo de pobreza que limita las oportunidades de desarrollo de los niños, las niñas y adolescentes.
   
          .div(titulo="La Desigualdad de género y la repetición o juzgamiento de estereotipos")
            p Las tareas asignadas en el campo suelen estar marcadas por prejuicios y estereotipos de género, lo que afecta el desarrollo integral de niñas y niños y refuerza roles tradicionales. Tareas domésticas, de servicio y cuidado, suelen ser dejadas en manos de las niñas y adolescentes; mientras que las largas jornadas con la ganadería, siembra y cultivo, se asume dentro de la masculinidad.
          .div(titulo="Déficit en atención y desarrollo infantil")
            p Como se ha mencionado previamente, las carencias en la atención al desarrollo durante la primera infancia son evidentes en los momentos de la educación inicial, extendiéndose hasta el  preescolar y escolar. Esto sumado a la falta de orientación familiar, repercute negativamente en la maduración física, emocional y social de los niños y futuros adolescentes.
          .div(titulo="Condiciones de vida y salud")
            p La precariedad económica y la falta de acceso a servicios básicos, impactan en la nutrición y la salud infantil, lo que a su vez limita su rendimiento y desarrollo escolar y personal.        
    
    .bg-full-width.bg-color-9.p-4.mb-5(data-aos="fade-left")
      .row
        .col-lg-auto
          img.img-a.img-t(src="@/assets/curso/temas/59.svg")
        .col-lg.j1
          p.mb-0 La protección del niño y la niña rural, demanda un enfoque integral que aborde tanto las carencias materiales como la garantía de derechos, la prevención de la violencia y la promoción de oportunidades. Superar las brechas rurales y empoderar a los niños y sus familias sobre sus derechos, es clave para asegurar su desarrollo pleno y una vida digna. 

    .row.mb-5.align-items-center 
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") Aunque las señales de abandono y de carencia de atención pueden no ser exclusivamente de los contextos rurales, se comprende la incidencia sobre los comportamientos, el desarrollo y la sana vivencia de los niños y las niñas. Hoy se reconoce la importancia de la atención, el contacto humano amoroso y el cuidado de los niños y las niñas en su identidad, la salud mental y social de los niños y las niñas. 
        .bg-color-4.p-4(data-aos="fade-up") 
          p(data-aos="fade-down").mb-0 Dentro de las buenas prácticas en los proyectos de vida rural, están los servicios integrales que se diseñan y ofrecen desde las entidades gubernamentales para garantizar la alimentación escolar o los centros de acción social que buscan garantizar la protección y el bienestar. También el apoyo Psicosocial y comunitario, a través de entidades que llevan la ruta de apoyo a través del acompañamiento y la implementación de actividades educativas.    
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/60.png", data-aos="zoom-in") 

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.5294/edu.2019.22.3.2" target="_blank" rel="noopener noreferrer") Bautista Díaz, D. A., García Gutiérrez, Z. del P., Casas Casallas, E., Gómez Amaya, J. & Gutiérrez Castro, B. A. (2019). Ludomática en ambientes de aprendizaje: educación rural en el posconflicto colombiano. Educación y Educadores, 22(3), 359-376.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://ecosur.repositorioinstitucional.mx/jspui/handle/1017/2388" target="_blank" rel="noopener noreferrer") Balente, O., Parra, M., Hernández, J., Gallardo, D., Carrillo, Al, Gutiérrez, P., Cruz, A., Olivo, M., Pérez, D. Morales, J. & Guzmán, A. (2016). Modos de vida e innovación territorial para el fortalecimiento de la armonía comunitaria. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.elespanol.com/enclave-ods/historias/20240910/nino-medio-rural-no-poder-estudiar-realidad-enfrentan-millones-menores/884662059_0.html" target="_blank" rel="noopener noreferrer") EL ESPAÑOL. (2024). Ser niño en el medio rural y no poder estudiar: la realidad a la que se enfrentan más de 98 millones de menores. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.javeriana.edu.co/recursosdb/5581483/8102914/Informe-79-Educacio%CC%81n-rural-en-Colombia-%28F%29oct.pdf" target="_blank" rel="noopener noreferrer") PONTIFICIA UNIVERSIDAD JAVERIANA. (2023). Informe análisis estadístico LEE. Características y retos de la educación rural en Colombia. Informe análisis estadístico LEE, 79, 1-21.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.unicef.org/colombia/situacion-de-la-infancia" target="_blank" rel="noopener noreferrer") UNICEF Colombia. (s.f.). Situación de la infancia.                           


            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://rightsandresources.org/livelihoods/es/mi-curso/module-1-what-is-our-shared-understanding-of-livelihoods/#:~:text=Los%20medios%20de%20vida%20que,entre%20hogares%20y%20comunidades%2C%20tanto" target="_blank" rel="noopener noreferrer") Rights and Resources. (s.f.). Mi Curso. Medios De Vida: Creando Prosperidad Para Los Pueblos Indígenas, Locales y Comunidades Afrodescendientes.


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=h4MAeP-s6Pc" target="_blank" rel="noopener noreferrer") Medios ACPO. (2019). Corto Documental | Derechos humanos, una apuesta por la paz.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=4jXPdn5BY20" target="_blank" rel="noopener noreferrer") FAO. (2024). Conoce el trabajo de la FAO en Colombia.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=NqdDaP16AwM" target="_blank" rel="noopener noreferrer") FAO UCER Bolivia. (2014). Medios de Vida.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=sqn5x_qJKmI" target="_blank" rel="noopener noreferrer") Sprouts Español. (2023). Abandono y trauma: Las vidas de los niños olvidados.              
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=RB5jlmUKeBc" target="_blank" rel="noopener noreferrer") Medios ACPO. (2014). Proyecto Café Valle de Tenza.
 
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Infancias Rurales',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'La crianza corresponde a las acciones, actitudes y comportamientos de los padres o cuidadores sobre los niños a su cargo, en el rol de mentores, acompañantes, mediadores o titulares en el proceso experiencial de ellos.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Falso',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Verdadero',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: 'Los estilos de pautas de crianza son:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Autoritarios, mandatarios, persuasivos y dispersos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Autoritarios, permisivos, democráticos, negligentes y sobreinvolucrados',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Autoritarios, conductistas, constructivistas y neoclásicos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Rurales, campesinos, urbanos y periurbanos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: 'Una cualidad en la crianza democrática es:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Existe Libertad sin ciertos límites de los niños',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'El niño siente el apoyo de sus padres, expresa opiniones, muestra emociones y expresa sus ideas libremente.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Hace acciones divertidas y con bajo nivel de responsabilidades y compromisos de los niños',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Las reglas no se establecen desde el diálogo niño – adulto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'El nivel formativo de los padres y cuidadores:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'No incide en las pautas de crianza de los niños y niñas',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Incide parcialmente, pues el cuidador o padre puede contar parcialmente con las herramientas y conocimientos necesarios para orientar la crianza',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Incide parcialmente, pues el nivel educativo puede generarle brechas de identidad a los niños',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'No incide porque el sistema educativo es el responsable de la crianza',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'Los ______________ son las formas como las familias y hogares pueden desarrollarse, mantenerse y suplir todos los requerimientos necesarios para que cada miembro pueda tener lo necesario y suficiente para desarrollarse y afrontar cualquier situación del entorno',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Los medios pedagógicos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Los medios de vida',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Los mecanismos de crianza',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: ' Los medios educativos',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
