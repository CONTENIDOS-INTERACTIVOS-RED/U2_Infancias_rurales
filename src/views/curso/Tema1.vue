<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Pautas de crianza'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .bg-full-width.bg-color-9.p-4.mb-5(data-aos="fade-left")
      .row
        .col-lg-auto
          img.img-a.img-t(src="@/assets/curso/temas/5.svg")
        .col-lg.j1
          p.mb-0 A continuación, conozcamos las diferentes temáticas correspondientes a las pautas de crianza.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] La familia como actor fundamental en las pautas de crianza

    p(data-aos="fade-down").mb-5 Según Bejarano, Beltrán y Pineda (2021), las familias son parte fundamental para el desarrollo socioafectivo de los niños y las niñas; esto se debe a que son el primer núcleo para la socialización, la educación en normas, roles y valores, los cuales, a su vez, están correlacionadas con el contexto en donde habitan. Lo anterior implica que la familia es fundamental en las pautas de crianza, el desarrollo socioafectivo, la construcción de la identidad y la personalidad.

    .row.justify-content-center.align-items-center
      .col-lg-10
        .bg-color-10(data-aos="fade-down")
          .px-4.px-md-5
            .row.align-items-center
              .col-lg-auto
                img.img-a.img-t(src="@/assets/curso/temas/6.png")        
              .col-lg
                .py-4.j1
                  p.mb-0 Si bien es cierto, las familias no están constituidas de la misma manera, existen roles que determinan el nivel de incidencia sobre el cuidado, la definición de normas y reglas, la educación sobre la experiencia de convivencia y la definición de hábitos y rutinas. Cuando los adultos responsables o cuidadores no asumen este tipo de roles, la crianza de los niños y las niñas, resultan siendo inadecuadas, permisivas e incluso, descuidadas.

        .bg-color-8.mb-5(data-aos="fade-up")
          .px-4.px-md-5
            .row.align-items-center
              .col-lg
                .py-4.j1
                  p.mb-0 De acuerdo con lo anterior, la familia es un conjunto de personas que comparten parentesco, es diferente a la comunidad que integra a otras personas dentro del círculo de vecindad o convivencia. De acuerdo con la cercanía o lejanía de los lazos familiares, tiene la responsabilidad de establecer normas y límites.
              .col-lg-auto
                img.img-a.img-t(src="@/assets/curso/temas/7.png")

    p(data-aos="fade-down") Por su parte, los padres o parientes más cercanos (cuidadores) son fundamentales para el cuidado físico y mental de los niños, también se convierten en modelos y guías, generando impactos significativos sobre el bienestar emocional, social y cognitivo. 

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Reflexiones sobre el rol de los padres 

    .row.mb-5.align-items-center 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/8.png", data-aos="zoom-in") 

      .col-lg-8
        .bg-color-4.p-4.mb-4(data-aos="fade-up") 
          p(data-aos="fade-down").mb-0 Los padres son corresponsables en la crianza de niños y niñas, aunque la familia sea disfuncional y se requiera una organización especial para lograr la dedicación y esfuerzo necesarios para lograr un ejercicio de crianza. Lo clave es fomentar el desarrollo integral del niño y la niña, estableciendo una relación afectuosa, siendo modelos a seguir y participando activamente en la vida de sus hijos.
        p(data-aos="fade-down") En gran medida, los padres son la primera figura de apego y están encargados de las primeras necesidades del bebé (alimentación, cuidado, hábitos, etc.); además, existen roles de crianza de los padres y cuidadores, asociados con:

    .bg-full-width-3.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5      
          .col-lg-8
            SlyderF.text-center(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/10.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5 Ser corresponsable de la crianza
                p.mb-0 Padre y madre deben compartir las tareas domésticas, los cuidados y la estimulación del desarrollo del niño, desde el nacimiento hasta la edad adulta.   
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/11.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5 Fomentar el desarrollo integral del niño
                p.mb-0 Estimular el desarrollo físico, emocional, social e intelectual del niño, en cada etapa de su vida. 
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/12.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5 Establecer una relación afectuosa e incondicional
                p.mb-0 Crear un vínculo de amor y confianza que proporcione seguridad y autoestima. 
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/13.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5 Ser un modelo a seguir
                p.mb-0 Los padres han de ser un ejemplo de conducta, valores y habilidades sociales, que el niño puede aprender y replicar. 
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/14.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5 Sumar en la educación
                p.mb-0 Apoyar al niño en su proceso de aprendizaje, tanto a nivel escolar como en la vida cotidiana. 
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/15.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5 Promover la salud y el bienestar
                p.mb-0 Asegurar que el niño y la niña tengan acceso a una alimentación saludable, atención médica y un entorno seguro.  
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/16.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5 Participar activamente en la vida del niño
                p.mb-0 Dedicar tiempo de calidad al niño, jugar con él, conversar y compartir experiencias. 
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/17.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5 Ayudar a resolver conflictos
                p.mb-0 Apoyar al niño en la resolución de problemas y dificultades, enseñándole a manejar sus emociones y a desarrollar habilidades sociales. 
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/18.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5 Fomentar la autonomía e independencia
                p.mb-0 Apoyar al niño y la niña en su proceso de desarrollo, la toma de decisiones y sus responsabilidades. 
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/19.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5 Garantizar los derechos del niño
                p.mb-0 Asegurar que el niño y la niña tengan sus derechos respetados y que puedan desarrollar su potencial al máximo. 
                                            
          .col-lg-4
            figure
              img.img-a.img-t(src='@/assets/curso/temas/9.png', alt='')

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Estilos de crianza

    .row.mb-5           
      .col-lg-8.mb-3.mb-lg-0 
        .bg-color-1.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-down") La noción de crianza tradicional, se refiere a un modelo de crianza que enfatiza #[b disciplina, control y autoridad] por parte de los padres, para preparar a los niños para el futuro y asegurar su cumplimiento de normas y expectativas sociales. 

          p(data-aos="fade-down").mb-0 Bajo este enfoque, la educación de los niños es conductista, partiendo de la premisa que aprenden mejor a través de castigos y recompensas, estableciendo límites claros y permanentes.
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/20.png", data-aos="zoom-in")    

    p(data-aos="fade-down") Otra noción de crianza es la #[b crianza humanizada], que consiste en un acompañamiento inteligente y afectuoso de los niños, promoviendo un desarrollo integral con autonomía, creatividad y autoestima. Dentro de sus características están: 

    .row.align-items-start.mb-5      
      .col-lg-8.mb-3.mb-lg-0 
        AcordionA(tipo="b")
          .div(titulo="Primer tema")
            p El acompañamiento afectuoso, con conexión emocional y comprensión de las necesidades individuales de los niños.     
          .div(titulo="Segundo tema")
            p La promoción de la creatividad, la autonomía y la exploración de su máximo potencial.
          .div(titulo="Tercero tema")
            p Fortalecimiento de la autoestima y el respeto por sí mismo y por las demás personas.
          .div(titulo="Cuarto tema")
            p La comunicación asertiva y la escucha activa y respetuosa. 
          .div(titulo="Quinto tema")
            p La participación en la toma de decisiones familiares y en la búsqueda del autocuidado y la promoción de los valores familiares.             
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/21.png", alt="")    

    .bg-full-width.bg-color-3.p-4.mb-5(data-aos="fade-left")
      .row
        .col-lg-auto
          img.img-a.img-t(src="@/assets/curso/temas/22.svg")
        .col-lg.j1
          p.mb-0 Por último, está la noción de crianza natural, es la educación respetuosa y empática que fomenta confianza y comunicación entre los padres e hijos. Se fundamenta en las prácticas de dedicación, compromiso, conocimiento y compromiso de los padres hacia sus hijos. 

    .row.mb-5.align-items-center 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/23.png", data-aos="zoom-in") 

      .col-lg-8
        p(data-aos="fade-down") Ahora bien, las pautas de crianza están relacionadas con los modelos que se aplican para educar, permitir la exploración y criar a niños y niñas durante sus primeras etapas de la vida, logrando propósitos integrales sobre ellos. 

        .bg-color-4.p-4(data-aos="fade-up") 
          p(data-aos="fade-down").mb-0 Aunque la crianza puede estar determinada por la historia y experiencia de los adultos, los contextos, la cultura, las capacidades y los recursos, se reconocen al menos cuatro tipos de crianzas, teniendo como referente algunas características asociadas a la forma como el adulto asume su rol y las herramientas que ejecuta durante el proceso. 

    .bg-color-9.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center            
        .col-lg.order-lg-1
          .p-4
            p.mb-0(data-aos="fade-up") Se destaca que el rol del adulto, padre o cuidador, puede ser permisivo, democrático, negligente, amoroso o frío y calculador. De acuerdo con esas características, es posible que la forma de crianza tenga cualidades particulares en sus mecanismos, reglas, control, límites, castigos e independencia.
        .col-lg-auto.mb-3.mb-lg-0.order-lg-2
          figure
            img.img-a.img-t(src='@/assets/curso/temas/24.png', alt='')                

    .titulo-figura(data-aos="fade-right")
      h5 Tabla 1. 
      span Estilos de crianza, según Diana Baumring

    .tabla-a-1.mb-5(data-aos="fade-left") 
      table
        thead.text-center
          tr
            th Rol de padres
            th Características
        tbody
          tr
            td.text-bold Padres autoritarios
            td 
              ul.lista-ul--color            
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Reglas impuestas por padres, en ocasiones con mucha rigurosidad.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Normas estrictas.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Reprimir emociones.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Para lograr el cariño de los padres, los niños pueden volverse obedientes.  
          tr
            td.text-bold Padres permisivos
            td 
              ul.lista-ul--color            
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Padres que cumplen sus deseos y caprichos.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 El niño controla a sus padres.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 No hay límites ni control de las emociones de los niños. 
          tr
            td.text-bold Padres democráticos
            td 
              ul.lista-ul--color            
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Libertad con ciertos límites de los niños.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Realiza acciones divertidas, pero también tiene responsabilidades y compromisos.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Las reglas se establecen desde el diálogo niño - adulto.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 El niño siente el apoyo de sus padres, expresa opiniones, muestra emociones y expresa sus ideas libremente.
                   
          tr
            td.text-bold Padres negligentes 
            td 
              ul.lista-ul--color            
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Padres ausentes. 
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Los niños no cuentan con los padres, no reciben atención ni retroalimentación.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Falta de confianza de los niños y dificultad para generar relaciones interpersonales sanas. 
          tr
            td.text-bold Padres sobre involucrados 
            td 
              ul.lista-ul--color            
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Eliminan los obstáculos a sus hijos y supervisan cada detalle de los niños.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Los niños no pueden asumir sus desafíos por sí mismos, porque los padres siempre están para resolverlo todo.


    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] El papel del apego en la crianza

    .row.mb-5.align-items-center           
      .col-lg-7.mb-3.mb-lg-0 
        .bg-color-3.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/25.svg")
            .col-lg
              p.mb-0 El apego es un vínculo afectivo intenso, duradero e innato que se desarrolla entre dos individuos, principalmente entre el bebé y sus padres, cuidadores u otras figuras significativas. El apego se reconoce a través de conductas observables desde los primeros meses de vida, como la búsqueda de contacto, la sonrisa, el llanto ante la separación y el alivio ante el reencuentro.
      .col-lg-5
        figure
          img.img-a.img-t(src="@/assets/curso/temas/26.png", data-aos="zoom-in")   

    .row.mb-5.align-items-center 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/27.png", data-aos="zoom-in") 

      .col-lg-8
        .bg-color-10.p-4.dash(data-aos="fade-down") 
          p(data-aos="fade-down").mb-0 John Bowlby, fue el pionero en el desarrollo de los fundamentos sobre la #[b teoría del apego], explicando que los seres humanos tienen una necesidad innata de establecer vínculos emocionales con figuras de apego, esenciales para el desarrollo emocional y social. 
        .bg-color-8.p-4(data-aos="fade-up") 
          p(data-aos="fade-down").mb-0 La #[b teoría del apego] sostiene además que, un fuerte vínculo emocional y físico con un cuidador principal en los primeros años de vida, es fundamental y si el vínculo es fuerte y seguro, se generarán oportunidades para explorar el mundo; si por el contrario, el vínculo es débil, se genera inseguridad, miedo y problemas de sentimientos sobre sí mismos.

    p(data-aos="fade-down") Existen cuatro tipos de apego:

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 Apego seguro
              p En el que el niño o la niña confía plenamente en su cuidador, concibiendo como disponible frente a sus necesidades. En este caso, el niño suele tener respuestas asociadas con la seguridad, la exploración del entorno y la libertad para contactar al cuidador en los momentos de estrés.     
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/28.png") 
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 Apego evitativo
              p En estos casos, el niño no ve relevante la relación con el cuidador, es independiente y evita la cercanía.     
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/29.png") 
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 Apego ambivalente
              p Ante los casos de separación, el niño se siente inseguro y ansioso, se vuelve dependiente emocionalmente.     
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/30.png") 
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 Apego desorganizado
              p El niño presenta conductas hacia el cuidador que se leen confusas y contradictorias, hay posibilidad de respuestas asociadas al abuso y los traumas.     
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/31.png") 

    #t_1_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.5] Pautas de crianza en contextos rurales y campesinos

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/32.png", data-aos="zoom-in")      
      .col-lg-8
        p(data-aos="fade-down") Como se ha mencionado previamente, el sector rural en países latinoamericanos como Colombia, presentan brechas históricas en el nivel socioeconómico, el acceso a tecnologías, la conectividad, la dispersión geográfica, el nivel de atención de calidad en salud, educación y las oportunidades de ingresos económicos, entre otros. Estas brechas inciden en las familias y, por tanto, en las pautas de crianza con las que se atienden a los menores para su desarrollo integral. 

        .bg-color-10.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/33.svg")
            .col-lg
              p.mb-0 Según Bejarano, Beltrán y Pineda (2021), las familias rurales presentan, de acuerdo con su nivel socioeconómico, educativo y geográfico, características relacionadas con su modo de vida y de orientar pautas, normas y principios en la formación de sus hijos. En el sector rural se presenta con mayor frecuencia la disfuncionalidad en los hogares, lo cual afecta la parte socioafectiva de los menores.

        p(data-aos="fade-down") Algunos de los retos que tienen los padres o cuidadores de niños campesinos, son: 

    .row.align-items-start.mb-5      
      .col-lg-8.mb-3.mb-lg-0 
        AcordionA(tipo="b")
          .div(titulo="Funcionalidad de la familia como núcleo y primer responsable de la crianza")
            p Ante las situaciones y oportunidades de la ruralidad, las familias que no cuentan con los medios, la unión o conexión y la fraternidad necesaria, terminan delegando la educación de los niños a otros parientes del núcleo familiar o los adultos mayores. Por otro lado, este factor también incide en el nivel de ausentismo de los padres en la crianza y el involucramiento necesario para impartir y acompañar las normas, límites y responsabilidades del niño.    
          .div(titulo="Acceso a recursos educativos para la formación, recreación y acceso a las tecnologías")
            p En este caso, se ha identificado que el sector rural tiene un déficit de este tipo de herramientas que facilitan el proceso de crianza y los entornos educomunicativos para los niños y las niñas. Los adultos a cargo del cuidado, no tienen acceso o las habilidades para implementar esos recursos en su día a día.
          .div(titulo="Nivel de formación de los padres y cuidadores")
            p Estos hacen las veces de mediadores y se convierten en los primeros maestros de los niños y las niñas. Al carecer de educación básica, los aprendizajes pueden estar relacionados con temas esenciales, pero no necesariamente se aborde una crianza integral y completa, que promueva el desarrollo de habilidades y capacidades. Por otro lado, las condiciones negativas de la crianza, asociadas con maltrato, ausencia en la comunicación, castigos violentos, entre otros, pueden estar asociados a patrones repetitivos de la crianza y al bajo nivel educativo de los padres y cuidadores.
          .div(titulo="La dedicación a tareas del campo requiere de extensas jornadas")
            p Con poco tiempo libre y con dedicación completa, los adultos no pueden invertir tiempo suficiente en las tareas de la crianza. En consecuencia, se asume la crianza, de manera simultánea, con tareas domésticas o laborales, donde el niño asume roles de apoyo y acompañamiento.
          .div(titulo="Las distancias geográficas en el campo, suelen ser dispersas")
            p Es así que el niño debe movilizarse por diferentes medios por el territorio, no siempre en compañía del adulto. Si debe asistir a una institución educativa, esta usualmente queda distante de su vivienda y el transporte hacia ella, le demandará unos esfuerzos mayores, que los de un niño del entorno urbano.           
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/34.png", alt="") 

    p(data-aos="fade-down") Dentro de los diferenciales positivos que se reconocen en la crianza campesina – rural, se encuentran:

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/35.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="26.5%" y="18%" numero="+")
                  h5 Entornos saludables
                  p.mb-0 Entornos saludables asociados a alimentación sana, disponible y orgánica. Aire y agua con niveles bajos de contaminación. 
                .bg-color-white.box-shadow.p-3(x="42%" y="18%" numero="+")
                  h5 Recuperación de tradiciones culturales
                  p.mb-0 Recuperación de tradiciones culturales que son parte del patrimonio material e inmaterial de las comunidades, aportando a la identidad personal.
                .bg-color-white.box-shadow.p-3(x="57.7%" y="18%" numero="+")
                  h5 Crianza colaborativa
                  p.mb-0 Crianza colaborativa, donde intervienen sus mayores tíos, abuelos, primos, permitiendo de manera positiva la socialización, comunicación, cuidado compartido y el encuentro entre pares de su misma edad. 
                .bg-color-white.box-shadow.p-3(x="73.5%" y="18%" numero="+")
                  h5 Actividades recreativas tradicionales 
                  p.mb-0 Desarrollo de actividades recreativas tradicionales, locales y basadas en el juego y la exploración del medio ambiente.

    .row.mb-5.align-items-center 
      .col-lg-5.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/36.png", data-aos="zoom-in") 

      .col-lg-7
        .bg-color-4.p-4.mb-4(data-aos="fade-up") 
          p(data-aos="fade-down").mb-0 López, et al. (2017), plantea en su estudio que la educación de los padres y las condiciones socioeconómicas de los sectores rurales, se relacionan con el acceso de los niños al sistema educativo, con su desarrollo cognoscitivo, sus habilidades verbales, las habilidades de lectura, el cociente intelectual y la ejecución de tareas no verbales. 
        p(data-aos="fade-down") En relación con:

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 La nutrición
              p Los niños de las zonas rurales presentan en buena parte la condición de bajos períodos de lactancia en los primeros momentos de la vida, por tanto se reconoce como una limitación frente al estado de salud de los menores. Por otro lado, los estudios de López, et al. (2017), demuestran que la desnutrición infantil y la presencia de enfermedades, puede estar asociado a la lactancia materna y la mala orientación en los procesos de suplementación.     
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/37.png") 

          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 El acceso al agua potable
              p Se ha identificado que su obtención en lo rural, suele hacerse directamente de un nacimiento natural, adaptado artesanalmente, con poco o nulo mantenimiento; tal situación es un factor de riesgo para la salud y constituye un asunto de derechos, pues, de acuerdo con las naciones unidas, todos los pueblos, sin importar su nivel de desarrollo o condición económica y social, tienen derecho al acceso a agua potable en cantidades suficientes.     
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/38.png") 

          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 La atención de la condición de salud
              p Es fundamental la atención bajo un enfoque de promoción de la salud y la prevención de enfermedades, en donde juega un papel fundamental los gobiernos locales, con programas e inversiones económicos puntuales, debido a la dificultad de acceso al sistema privado de salud y al acceso de medicamentos por vía canasta familiar. Los procesos de prevención de enfermedades, resulta siendo prioritario en las familias rurales, sobre todo cuando se hace difícil el acceso rápido a lugares y profesionales de la salud en el perímetro cercano.     
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/39.png") 

          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 La forma de castigo
              p La forma de castigo más usada para corregir a los menores fue la de las palmadas y los golpes. Un estudio de la UNICEF en países latinoamericanos, señala la existencia de una práctica generalizada de castigo físico contra los niños en zonas urbanas y rurales, además de ser reconocido como una práctica normal en la sociedad y que el maltrato se encuentra arraigado en la crianza de los menores.     
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/40.png")


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=ECCCFPfKZDs" target="_blank" rel="noopener noreferrer") SPROUTS en español. (2022). 5 estilos de Crianza y sus Efectos en la Vida.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=QbhBcyGbTVw" target="_blank" rel="noopener noreferrer") Food and Agriculture Organization of the United Nations. (2024). La transformación de los sistemas agroalimentarios como motor de paz en Colombia.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=PzdZ4Wjb5ec" target="_blank" rel="noopener noreferrer") Whee. educación para la inclusión. (2021). ¿Qué es crianza humanizada? 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=ag-VzuN-WnM" target="_blank" rel="noopener noreferrer") Sprouts Español. (2024).Naturaleza versus crianza: conductismo o genética.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=olnzuMtZdA8&t=340s" target="_blank" rel="noopener noreferrer") Sprouts Español. (2020). La Teoría del Apego: Cómo la Infancia Afecta la Vida.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=6ZK2AYuI8og" target="_blank" rel="noopener noreferrer") Mariacanovirtual. (2024). ¿Qué es la crianza respetuosa-disciplina positiva?                                                                       

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
