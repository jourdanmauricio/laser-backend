'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkDelete('posts', null, {});
    const useradmin = await queryInterface.sequelize.query(
      'SELECT * FROM "users" WHERE role = ? ',
      {
        replacements: ['superadmin'],
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );

    return queryInterface.bulkInsert(
      'posts',
      [
        {
          title: 'Liquen escleroso vulvar',
          slug: 'liquen-escleroso-vulvar',
          resume:
            'Tener picor o prurito vulvar es más común de lo que puede parecer entre las mujeres. Pero ¿qué pasa cuando a pesar de innumerables tratamientos para candidiasis',
          content:
            '<p><strong>SÍNTOMAS</strong></p><p><br></p><p>El síntoma más común del liquen escleroso es el<strong style="background-color: transparent;">&nbsp;picor o prurito vulvar</strong>, pudiendo llegar a impedir el sueño de la paciente. Esta característica no es única y específica del liquen ya que se presenta en la mayoría de los trastornos vulvares, por lo que hay que hacer un estudio exhaustivo para diagnosticarlo.</p><p>También pueden darse los siguientes síntomas:</p><p><br></p><ul><li><strong style="background-color: transparent;">Pérdida de la anatomía vulvar</strong>. Se puede observar una fusión de los labios menores o una disminución de estos, un recubrimiento del capuchón del clítoris por el prepucio, etc.</li><li><strong style="background-color: transparent;">Molestias anales</strong>. Además de afectar a la piel perianal puede provocar prurito y fisuras en la zona, incluso defecación dolorosa o sangrado rectal. En el caso de las niñas el estreñimiento podría indicar su presencia.</li><li><a href="https://barbarafdelbas.es/ginecologia-funcional/disfunciones-sexuales-femeninas/" rel="noopener noreferrer" target="_blank" style="background-color: transparent; color: rgb(84, 84, 84);"><strong>Disfunciones sexuales</strong></a><strong style="background-color: transparent;">&nbsp;o dispareunia.</strong>&nbsp;Puede provocar dolores durante las relaciones sexuales o la penetración, lo que dificulta la consecución del orgasmo.</li><li><br></li></ul><p>Existen pacientes asintomáticas a las que se les detecta la enfermedad por el color y forma de la vulva, generalmente, son los casos más aparatosos porque son los que tardamos más en diagnosticarlos.</p><p><strong>DIAGNÓSTICO</strong></p><p><br></p><p><img src="https://res.cloudinary.com/dn7npxeof/image/upload/v1677218204/laura_rodriguez/logo_desktop.svg"></p><p><br></p><p><br></p><p>Para diagnosticar un caso de liquen escleroso vulvar es necesario observar sintomatología característica de la patología y realizar un&nbsp;<strong style="background-color: transparent;">examen clínico</strong>&nbsp;en profundidad a la paciente. Podemos acompañarlo de una&nbsp;<strong style="background-color: transparent;">vulvoscopia</strong>&nbsp;que nos ayude con el diagnóstico.</p><p>Aunque no todos los casos necesitan una&nbsp;<strong style="background-color: transparent;">biopsia de confirmación</strong>, es lo más útil para confirmar el diagnóstico o reevaluarlo. Cuando hablamos de biopsia vulvar nos referimos a una sencilla prueba que se realiza en consulta puesto que solo es necesario realizar un punch de unos 4mm y administrar una pequeña cantidad de anestesia local. En ocasiones no es necesario ni dar un punto de aproximación. La recuperación y vuelta a la rutina es casi inmediata.</p><p><br></p><p><strong>TRATAMIENTO MÉDICO</strong></p><p><br></p><p>El tratamiento del liquen escleroso vulvar tiene el objetivo de disminuir los síntomas de prurito y dolor, así como las fisuras, hiperqueratosis o equimosis producidas por la patología.</p><p>Lo más conveniente es que el tratamiento se comience a aplicar lo más pronto posible para aliviar el malestar de la paciente. El tratamiento temprano puede revertir muchos de los cambios en la piel, como la palidez.</p><p>La primera terapia que se debe aplicar a la paciente es la<strong style="background-color: transparent;">&nbsp;educación&nbsp;</strong>acerca del liquen escleroso: qué es, en qué consiste, cómo convivir con él, el tratamiento a aplicar…</p><p>Junto a esa educación imprescindible se encuentra la terapia médica, la que, actualmente, se basa en el uso de&nbsp;<strong style="background-color: transparent;">corticoides tópicos.</strong>&nbsp;El tratamiento de corticoides tópicos de alta potencia varía en función de cada paciente. Normalmente se comienza aplicando propionato de clobestasol durante 6 a 12 semanas. Pasado este tiempo se reevalúa a la paciente y se le prescribe una terapia de mantenimiento a largo plazo para mantener la normalidad del color y la textura de la piel, además de calmar el picor.</p><p>Los resultados de la primera fase suelen ser favorables, viéndose reducido el prurito y el dolor y&nbsp;los síntomas dermatológicos.</p><p>Las revisiones del tratamiento es recomendable que se realicen cada 6 meses, y si la paciente no realiza una terapia de mantenimiento, cada 3.</p>',
          image:
            'https://res.cloudinary.com/dn7npxeof/image/upload/v1678124199/laura_rodriguez/liquen-escleroso-vulvar-02.jpg',
          alt_image: 'liquen-escleroso-vulvar',
          order: 4,
          main: false,
          created: new Date(),
          user_id: useradmin[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Vulvovaginitis por candida: Tratamiento',
          slug: 'vulvovaginitis-por-candida-tratamiento',
          resume:
            'La vulvovaginistis por Candida o, más conocida, candidiasis vulvovaginal, es una de las infecciones más habituales entre las mujeres',
          content:
            '<p><br></p><p><em style="background-color: transparent;">La vulvovaginistis por </em><strong style="background-color: transparent;"><em>Candida</em></strong><em style="background-color: transparent;"> o, <u>más conocida</u>, candidiasis vulvovaginal, es una de las infecciones más habituales entre las mujeres. Así que, si has tenido candidiasis, tienes, o tienes alguna vez en tu vida, no te preocupes, es de lo más normal, tan solo debes acudir a una consulta ginecológica para recibir el tratamiento adecuado.</em></p><p><br></p><p>Se trata de una infección común de la vulva y la vagina originada por el hongo Candida. Según estudios, 3 de cada 4 mujeres sufren vulvovaginitis una vez en la vida, de las que el 40-50% experimentan, al menos, un segundo episodio. Además, es una de las principales causas de picazón y secreción vulvovaginal, aunque entre el 10-20% de las pacientes son asintomáticas.</p><p>Visto lo frecuente que es esta infección es importante difundir información y saber cómo se puede tratar. En el artículo te explico los tipos de tratamientos efectivos que existen para hacer frente a los diversos tipos de candidiasis.</p><h4><br></h4><h4>CONTENIDO</h4><ol><li><a href="https://barbarafdelbas.es/ginecologia/vulvovaginitis-por-candida-tratamiento/#1" rel="noopener noreferrer" target="_blank" style="color: rgb(84, 84, 84); background-color: transparent;">Tipos de vulvovaginitis por candida</a></li><li><a href="https://barbarafdelbas.es/ginecologia/vulvovaginitis-por-candida-tratamiento/#2" rel="noopener noreferrer" target="_blank" style="color: rgb(84, 84, 84); background-color: transparent;">Tratamiento para la vulvovaginitis por candida</a></li><li><a href="https://barbarafdelbas.es/ginecologia/vulvovaginitis-por-candida-tratamiento/#3" rel="noopener noreferrer" target="_blank" style="color: rgb(84, 84, 84); background-color: transparent;">Ginecología integrativa</a></li></ol><p><br></p><p><strong>TIPOS DE VULVOVAGINITIS POR CANDIDA</strong></p><p><br></p><p><span style="background-color: transparent;">Como he comentado, la vulvovaginitis es una infección muy común, sin embargo, no a todas las mujeres les afecta de la misma manera. Según la frecuencia de los episodios, los síntomas presentados y el estado de la paciente, se distinguen tres tipos de infección:</span></p><p><br></p><p><br></p><ul><li>Candida no complicada</li></ul><p>Episodios esporádicos: &lt;3 episodios/año</p><p><br></p><p>Síntomas leves o moderados</p><p>Posible infección por Candida Albicans</p><p>Paciente sana y no embarazada</p><p>Paciente inmunocompetente</p><ul><li>Candida complicada</li></ul><p>Episodios recurrentes: &gt;3 episodios/año</p><p>Síntomas graves</p><p>Infección por Candida distintas de C. Albicans, C. Glabrata</p><p>Paciente embarazada, con diabetes mal controlada, inmunosupresión, etc.</p><ul><li>Candida recurrente</li></ul><p>Episodios recurrentes: &gt;4 episodios/año</p><p>Obtener cultivos vaginales</p><p>Infección por candidas menos comunes</p><p>Causada por reservorio vaginal persistente o una infección de cepas idénticas C.Albicans susceptibles.</p><p><br></p>',
          image:
            'https://res.cloudinary.com/dn7npxeof/image/upload/v1678061985/laura_rodriguez/x-ray-of-the-jaw-2416944_640.jpg',
          alt_image: 'Vulvovaginitis',
          order: 3,
          main: false,
          created: new Date(),
          user_id: useradmin[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Envejecimiento saludable',
          slug: 'envejecimiento-saludable',
          resume:
            'Deberás evitar deportes de impacto y estar mucho tiempo sentada las primeras 24h después del tratamiento. Deberás aplicar una crema todos los días durante la primera semana.',
          content:
            '<p>Desde hace unas décadas hasta el día de hoy hemos visto cómo la esperanza de vida ha ido en aumento, las personas viven más tiempo y disfrutan más años de aquellas cosas que más les gustan.</p><p>Ese tiempo de más lleva asociado el concepto de longevidad: vivir la mayor cantidad de años posible con salud y calidad de vida. Alcanzar ese estado de bienestar en una edad avanzada solo es posible si contamos con herramientas adecuadas que favorecen el envejecimiento saludable.</p><p><br></p><p>En el post de hoy hablo sobre el envejecimiento saludable y cómo conseguirlo con la medicina antienvejecimiento.</p><h4><br></h4><h4><strong>¿Qué es el envejecimiento?</strong></h4><p><br></p><p>El envejecimiento comienza a notarse sobre todo a partir de los 50 años. Es entonces cuando se empiezan a notar cambios inevitables propios del paso del tiempo: estructurales, hormonales y metabólicos. Por ejemplo, los dolores físicos, la reducción muscular, la incontinencia de orina o la menopausia.</p><p>Además, el envejecimiento depende de momentos vitales importantes que influyen en el estado de salud físico o mental de cada persona, como puede ser el estrés laboral continuo o el fallecimiento de un ser querido. Todos estos cambios son relativos. Cada persona es un mundo y los cambios pueden aparecer antes o después y afectar de una manera u otra.</p><h5><br></h5><h5><strong style="background-color: transparent;"><em>¿Y el envejecimiento saludable?</em></strong></h5><p><br></p><p>Según las Organización Mundial de la Salud (OMS), el&nbsp;<a href="https://www.who.int/es/initiatives/decade-of-healthy-ageing#:~:text=%C2%BFQu%C3%A9%20es%20el%20Envejecimiento%20Saludable,que%20para%20ellas%20es%20importante." rel="noopener noreferrer" target="_blank" style="color: rgb(84, 84, 84); background-color: transparent;"><strong>envejecimiento saludable</strong></a>&nbsp;es “el proceso de fomentar y mantener la capacidad funcional que permite el bienestar en la vejez”. En cuanto a la capacidad funcional, se refiere a la capacidad de las personas para hacer lo que para ellas es importante.</p><p><br></p><p>La mayor esperanza de vida ofrece oportunidades para disfrutar de la vida durante más tiempo y hacer todas aquellas cosas que tenemos pendientes o que desearíamos haber hecho años antes: realizar nuevas actividades, viajar, disfrutar del tiempo en familia… Para alcanzar todas esas metas debemos tener una buena salud, y aquí es donde aparece la oportunidad de llevar un envejecimiento saludable. Hacernos mayores no depende de nosotros; sin embargo, cuidar nuestro estilo de vida y nuestra salud sí. Mantener o comenzar a realizar hábitos de vida saludable conforme pasan los años es muy importante para retrasar la aparición de los cambios que he nombrado anteriormente.</p><p><br></p><p><strong>El envejecimiento en la actualidad</strong></p><p><br></p><p>Los datos y cifras de la OMS del envejecimiento en la actualidad muestran que la mayor parte de la población tiene una esperanza de vida igual o superior a los 60 años. De hecho, el número de personas de 60 años o más supera al de niños menores de 5 años.&nbsp;</p><p>Además, se prevé que entre 2020 y 2030 el porcentaje de personas mayores de 60 años aumente un 34%. Esto supone que en 2030 1 de cada 6 personas en el mundo (1400 personas) tendrá 60 años o más, número que se duplicará en 2050.</p><p>Observando los datos actuales y las previsiones futuras podemos afirmar que nos encontramos ante un cambio en la distribución de la población hacia edades más avanzadas, es decir, un envejecimiento de la población. Ante esta situación es de vital importancia comenzar a tomar medidas que garanticen una calidad de vida a las personas antes y durante la edad avanzada.</p><p><br></p><p><br></p><p><img src="https://res.cloudinary.com/dn7npxeof/image/upload/v1677218204/laura_rodriguez/logo_desktop.svg" style="display: block; margin: auto;"></p><p><br></p><p><br></p><p><strong>La Década del Envejecimiento Saludable</strong></p><p><br></p><p>Desde el año pasado nos encontramos en una época denominada la Década del Envejecimiento Saludable. Así la declaró la Asamblea General de las Naciones Unidas, quien dejó a la OMS como responsable de su puesta en funcionamiento.</p><p>La Década es un proyecto de colaboración a escala mundial que tiene por objetivo unir los esfuerzos de los diferentes grupos sociales y profesionales que conforman la población: gobiernos, organismos internacionales, profesionales, sociedad civil, sector privado… para garantizar vidas más largas y saludables.</p><p><br></p><p>La ginecología funcional e integrativa y la medicina antienvejecimiento son claros contribuyentes a la consecución de este objetivo ya que mejoran la calidad de vida de las mujeres en todas las etapas de su vida.</p><p><br></p><p><br></p><p><img src="https://res.cloudinary.com/dn7npxeof/image/upload/v1677218204/laura_rodriguez/logo_desktop.svg" style="display: block; margin: auto;"></p><p><br></p><p><br></p><p><strong>¿Qué puede hacer la medicina antienvejecimiento?</strong></p><p><br></p><p>El envejecimiento es un proceso, una etapa más de nuestras vidas, por eso debemos lidiar con él de la mejor manera posible. La&nbsp;<a href="https://barbarafdelbas.es/medicina-antienvejecimiento/https://barbarafdelbas.es/medicina-antienvejecimiento/" rel="noopener noreferrer" target="_blank" style="color: rgb(84, 84, 84); background-color: transparent;"><strong>medicina antiaging</strong></a>, antienvejecimiento o de longevidad proporciona soluciones a problemas cognitivos y motores que van surgiendo a lo largo de la vida de las mujeres.</p><p><br></p><p>En las consultas de longevidad se realizan diferentes análisis exhaustivos para comprobar el estado general de la paciente:</p><p><br></p><ul><li>De mineralización, vitaminas y minerales pesados en tejidos</li><li>Genéticos</li><li>Epigenéticos</li><li>De alto valor: salud cerebral, digestiva, inmunitaria, etc.</li></ul><p><br></p><p>Una vez analizada a la paciente en profundidad y conocido su historial clínico y personal, se diseña un tratamiento completamente personalizado e integrativo. Puede incluir:</p><p><br></p><ul><li>Nutrición ortomolecular</li><li>Microinmunoterapia</li><li><span style="background-color: transparent;">Planes nutricionales y deportivos personalizadas</span></li><li>Terapia hormonal</li><li>Etc.</li></ul><p><br></p><p>Si quieres llegar a los 80 sintiéndote como si tuvieses 50 años,&nbsp;<a href="/contact" rel="noopener noreferrer" target="_blank" style="color: rgb(84, 84, 84); background-color: transparent;">pide cita conmigo</a>, en mi consulta conseguirás un envejecimiento de lo más saludable.</p>',
          image:
            'https://res.cloudinary.com/dn7npxeof/image/upload/v1676950615/laura_rodriguez/home.jpg',
          alt_image: 'Envejecimiento saludable',
          order: 2,
          main: true,
          created: new Date(),
          user_id: useradmin[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'La ecografía vaginal',
          slug: 'la-ecografia-vaginal',
          resume:
            'Acudir a una consulta ginecológica puede resultar incómodo, y más si no sabes qué es lo que te van a hacer y cómo, aunque tan solo sea una revisión anual para ver si todo va correctamente. ',
          content:
            '<p>Acudir a una consulta ginecológica puede resultar incómodo, y más si no sabes qué es lo que te van a hacer y cómo, aunque tan solo sea una revisión anual para ver si todo va correctamente. Muchas mujeres que acuden a consulta para hacerse una ecografía tienen la duda de cómo se les hará: externa, a través del abdomen, o interna, de forma transvaginal.</p><p>Esta preocupación aumenta cuando todavía no se han hecho ninguna ecografía antes o si no han tenido relaciones sexuales con penetración antes de la prueba. Así que, para que acudas tranquila a tu próxima ecografía, en este artículo te explico en qué consiste una ecografía transvaginal.</p><p><br></p><p><strong>¿QUÉ ES UNA ECOGRAFÍA VAGINAL?</strong></p><p><br></p><p>La ecografía vaginal o transvaginal es un tipo de exploración que, mediante la emisión de ondas de sonido de alta frecuencia, crea una imagen del interior del cuerpo. Con su uso se puede&nbsp;<strong style="background-color: transparent;">examinar los órganos reproductivos femeninos</strong>. Al introducir el aparato a través de la vagina se puede observar, por ejemplo, el estado del útero, los ovarios y el cuello uterino.</p><p><br></p><p><strong>¿EN QUÉ CONSISTE LA ECOGRAFÍA VAGINAL?</strong></p><p><br></p><p>En muchas ramas de la medicina se hace uso de la ecografía para establecer diagnósticos fiables, y no podía ser menos en el caso de la ginecología. Aunque en el resto de las especialidades se realiza de manera externa (pasando el transductor por encima de la piel), en este caso se realiza de forma interna, siempre que la paciente haya tenido relaciones con penetración vaginal.</p><p>En una ecografía transvaginal, el aparato se introduce suavemente a través de la vagina. Para ello, la paciente se debe acostar boca arriba (lo que llamamos posición ginecológica) o de lado con las rodillas flexionadas. Una vez la paciente está en posición se introduce un terminal alargado (tiene la forma de un dedo largo de unos 15cm y una anchura de 1cm) dentro de la vagina, lo cual permite captar las imágenes de la misma y observar de muy cerca el útero y los ovarios.</p><p>Yo, personalmente, os pido que hagamos respiraciones dirigidas y así facilitar el paso de la sonda.</p><p><br></p><p><img src="https://res.cloudinary.com/dn7npxeof/image/upload/v1677218204/laura_rodriguez/logo_desktop.svg"></p><p><br></p><p>Change</p><p><br></p><p><img src="https://res.cloudinary.com/dn7npxeof/image/upload/v1677218204/laura_rodriguez/logo_desktop.svg"></p><p><br></p><p><br></p><p><br></p><p><strong>¿CUÁNDO SE REALIZA UNA ECOGRAFÍA VAGINAL?</strong></p><p><br></p><p><strong>﻿</strong><img src="https://res.cloudinary.com/dn7npxeof/image/upload/v1676934111/laura_rodriguez/depilacion-laser-terapia-opt2.jpg" width="302"></p><p><br></p><p><br></p><p>Este tipo de ecografía es la técnica más indicada para establecer patologías ginecológicas como miomas, pólipo, quistes de ovario o tumores. Además,&nbsp;<strong style="background-color: transparent;">permite observar</strong>:</p><ul><li>Malformaciones uterinas.</li><li>La reserva ovárica a través del contaje de folículos antrales.</li><li>En los tratamientos de reproducción asistida, el crecimiento de los folículos del ovario.</li><li>La correcta localización de los DIUs.</li></ul><p>Es habitual realizarla&nbsp;<strong style="background-color: transparent;">durante el embarazo</strong>&nbsp;para:</p><ul><li>Detectar el desarrollo del feto en el útero durante las primeras semanas.</li><li>Identificar o descartar problemas como un aborto espontáneo o si el bebé se está desarrollando fuera del útero.</li><li>Encontrar signos de parto prematuro.</li></ul><p><strong style="background-color: transparent;">Otras ocasiones</strong>&nbsp;en las que se recurre a la ecografía transvaginal son:</p><ul><li>Dolor pélvico severo</li><li>Resultado de un examen pélvico anormal</li><li>Sangrado vaginal no frecuente</li><li>Dificultad para quedarse embarazada</li><li>O, simplemente, como parte de una revisión habitual.</li></ul><p><br></p><p><br></p><p><img src="https://res.cloudinary.com/dn7npxeof/image/upload/v1676933633/laura_rodriguez/274122117_114489807828871_4517261275440542787_n.jpg" width="209" style="display: block; margin: auto;"></p>',
          image:
            'https://res.cloudinary.com/dn7npxeof/image/upload/v1676933633/laura_rodriguez/274122117_114489807828871_4517261275440542787_n.jpg',
          alt_image: 'ecografia',
          order: 1,
          main: true,
          created: new Date(),
          user_id: useradmin[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('posts', null, {});
  },
};