export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export interface Article {
  slug: string;
  title: { es: string; en: string };
  excerpt: { es: string; en: string };
  date: string;
  readTime: number;
  tags: string[];
  content: { es: ContentBlock[]; en: ContentBlock[] };
}

export const articles: Article[] = [
  {
    slug: "ventas-crecen-rentabilidad-no",
    date: "2026-05-20",
    readTime: 6,
    tags: ["Rentabilidad", "Márgenes", "Retail"],
    title: {
      es: "Por qué tus ventas crecen pero tu rentabilidad no",
      en: "Why your sales grow but your profitability doesn't",
    },
    excerpt: {
      es: "Vender más no siempre significa ganar más. Si tu facturación sube pero el margen se achica, el problema está en los datos que todavía no estás mirando.",
      en: "Selling more doesn't always mean earning more. If your revenue grows but margins shrink, the problem lies in data you're not yet looking at.",
    },
    content: {
      es: [
        {
          type: "paragraph",
          text: "Es uno de los escenarios más frustrantes en un negocio: el volumen de ventas sube mes a mes, el equipo trabaja más, el depósito está activo, pero a fin de mes la caja no refleja ese crecimiento. ¿Dónde se va la plata?",
        },
        {
          type: "paragraph",
          text: "La respuesta casi siempre está en la misma dirección: se están vendiendo más unidades, pero con menor margen. Y eso no se ve en el ticket promedio ni en el reporte de ventas estándar.",
        },
        {
          type: "heading",
          text: "El problema del mix de ventas",
        },
        {
          type: "paragraph",
          text: "No todos los productos aportan igual. Si en los últimos meses creciste impulsado por los productos de menor margen —porque son los que más se piden, los que tenés en oferta, o los que el equipo comercial prioriza— tu rentabilidad baja aunque el número total suba.",
        },
        {
          type: "paragraph",
          text: "Esto se llama degradación del mix, y es silenciosa: el sistema de ventas no la alerta porque el total facturado sigue creciendo.",
        },
        {
          type: "quote",
          text: "Crecer en volumen vendiendo lo que menos deja es una trampa. Cuanto más vendés, más perdés en términos relativos.",
        },
        {
          type: "heading",
          text: "Cómo detectarlo con datos",
        },
        {
          type: "list",
          items: [
            "Calculá el margen bruto por producto o categoría, no solo el total de la empresa.",
            "Comparalo entre períodos: ¿el margen de la categoría A era 38% hace 3 meses y ahora es 31%? Ahí está el problema.",
            "Cruzá margen con volumen vendido: si los productos de menor margen ganaron participación, encontraste la causa.",
            "Revisá también el impacto de descuentos no controlados: muchas veces el equipo comercial hace descuentos sin ver el efecto en el margen.",
          ],
        },
        {
          type: "heading",
          text: "El efecto de los costos variables ocultos",
        },
        {
          type: "paragraph",
          text: "Otro factor frecuente: los costos que crecen con el volumen pero que no siempre se asignan bien. Comisiones de venta, costos de logística, merma, embalaje diferencial por canal. Si vendés más pero esos costos crecen más rápido que la facturación, el margen se comprime aunque el precio de venta no haya cambiado.",
        },
        {
          type: "paragraph",
          text: "El análisis de contribución marginal por producto o canal es la herramienta para verlo: cuánto aporta realmente cada unidad vendida después de restar todos sus costos variables directos.",
        },
        {
          type: "heading",
          text: "Qué revisar primero",
        },
        {
          type: "list",
          items: [
            "Margen bruto por categoría en los últimos 3 meses: ¿subió o bajó?",
            "Participación de cada categoría en la facturación total: ¿cambió el mix?",
            "Descuentos aplicados por canal o vendedor: ¿hay un canal que sistematicamente opera con descuento?",
            "Costos variables asignados por producto: ¿están todos incluidos en el cálculo de margen?",
          ],
        },
        {
          type: "paragraph",
          text: "Con estos cuatro puntos claros, podés identificar en menos de una hora dónde está la pérdida de rentabilidad. Y a partir de ahí, tomar decisiones concretas: ajustar precios, cambiar el foco comercial, revisar descuentos, o replantear el mix.",
        },
        {
          type: "paragraph",
          text: "Si querés que hagamos juntos ese análisis para tu negocio, escribime. El diagnóstico inicial es sin costo y en la primera charla ya tenemos claridad sobre dónde mirar.",
        },
      ],
      en: [
        {
          type: "paragraph",
          text: "It's one of the most frustrating scenarios in a business: sales volume grows month after month, the team works harder, the warehouse is busy, but at the end of the month the cash doesn't reflect that growth. Where does the money go?",
        },
        {
          type: "paragraph",
          text: "The answer almost always points in the same direction: more units are being sold, but with lower margins. And that doesn't show up in the average ticket or the standard sales report.",
        },
        {
          type: "heading",
          text: "The sales mix problem",
        },
        {
          type: "paragraph",
          text: "Not all products contribute equally. If in recent months your growth was driven by lower-margin products — because they're the most requested, on promotion, or the ones your sales team prioritizes — your profitability drops even as the total number rises.",
        },
        {
          type: "paragraph",
          text: "This is called mix degradation, and it's silent: your sales system doesn't alert you because total revenue keeps growing.",
        },
        {
          type: "quote",
          text: "Growing in volume by selling what yields the least is a trap. The more you sell, the more you lose in relative terms.",
        },
        {
          type: "heading",
          text: "How to detect it with data",
        },
        {
          type: "list",
          items: [
            "Calculate gross margin per product or category, not just the company total.",
            "Compare across periods: was the margin in category A 38% three months ago and now it's 31%? There's the problem.",
            "Cross margin with units sold: if lower-margin products gained share, you've found the cause.",
            "Also review the impact of uncontrolled discounts: the sales team often discounts without seeing the margin effect.",
          ],
        },
        {
          type: "heading",
          text: "The effect of hidden variable costs",
        },
        {
          type: "paragraph",
          text: "Another frequent factor: costs that grow with volume but aren't always properly assigned. Sales commissions, logistics costs, shrinkage, differential packaging by channel. If you sell more but those costs grow faster than revenue, margins compress even if the selling price hasn't changed.",
        },
        {
          type: "paragraph",
          text: "Contribution margin analysis by product or channel is the tool to see it: how much does each unit actually contribute after subtracting all its direct variable costs.",
        },
        {
          type: "heading",
          text: "What to review first",
        },
        {
          type: "list",
          items: [
            "Gross margin by category over the past 3 months: did it go up or down?",
            "Each category's share of total revenue: did the mix change?",
            "Discounts applied by channel or salesperson: is there a channel that systematically operates with discounts?",
            "Variable costs assigned per product: are they all included in the margin calculation?",
          ],
        },
        {
          type: "paragraph",
          text: "With these four points clear, you can identify in under an hour where the profitability loss is happening. From there, you make concrete decisions: adjust prices, shift commercial focus, review discounts, or rethink the mix.",
        },
        {
          type: "paragraph",
          text: "If you'd like to do that analysis together for your business, reach out. The initial diagnosis is free and in the first conversation we'll already have clarity on where to look.",
        },
      ],
    },
  },
  {
    slug: "inventario-muerto-como-detectarlo",
    date: "2026-05-12",
    readTime: 6,
    tags: ["Inventario", "Flujo de Caja", "Excel"],
    title: {
      es: "Inventario muerto: cómo detectarlo antes de que afecte tu flujo de caja",
      en: "Dead inventory: how to detect it before it damages your cash flow",
    },
    excerpt: {
      es: "El stock que no rota es dinero inmovilizado. Te explico cómo identificarlo con Excel y qué hacer antes de que sea un problema mayor.",
      en: "Inventory that doesn't move is frozen money. Learn how to identify it with Excel and what to do before it becomes a bigger problem.",
    },
    content: {
      es: [
        {
          type: "paragraph",
          text: "Hay un tipo de problema en los negocios que es silencioso: el inventario que no se vende. No genera una alerta, no aparece en el estado de resultados como una pérdida, y muchas veces ni siquiera se ve porque está en el depósito. Pero está ahí, ocupando espacio y consumiendo capital.",
        },
        {
          type: "heading",
          text: "¿Qué es el inventario muerto?",
        },
        {
          type: "paragraph",
          text: 'El inventario muerto (también llamado stock sin movimiento) son aquellos productos que no registraron ninguna venta en un período determinado — típicamente 60, 90 o 180 días, según el rubro. No hay una definición universal: lo que importa es que vos definas el umbral relevante para tu negocio.',
        },
        {
          type: "paragraph",
          text: "El problema no es solo el espacio físico. Es el costo de oportunidad: ese dinero podría estar en productos que sí se venden, en capital de trabajo, o en mejoras operativas.",
        },
        {
          type: "heading",
          text: "Cómo identificarlo en Excel en 3 pasos",
        },
        {
          type: "list",
          items: [
            "Exportá tu stock actual con código de producto, descripción, cantidad y costo unitario.",
            "Cruzá ese stock con el historial de ventas de los últimos 90 días. Usá BUSCARV o SUMAR.SI para traer las unidades vendidas por producto.",
            "Los productos con ventas = 0 en ese período son tu inventario muerto. Calculá el valor total: cantidad × costo unitario.",
          ],
        },
        {
          type: "paragraph",
          text: "Lo que obtenés al final es un número concreto: cuánto capital tenés inmovilizado. En la mayoría de las PyMEs que analizo, este número sorprende. No es raro encontrar que entre el 15% y el 30% del valor del stock no tuvo movimiento en los últimos 3 meses.",
        },
        {
          type: "heading",
          text: "El análisis ABC como complemento",
        },
        {
          type: "paragraph",
          text: "El análisis ABC clasifica los productos en tres grupos según su participación en las ventas totales: A (el 20% de productos que genera el 80% de los ingresos), B (el siguiente 30%) y C (el 50% restante con menor impacto). Los productos C con bajo movimiento son los candidatos principales al stock muerto.",
        },
        {
          type: "quote",
          text: "Si un producto está en categoría C y no vendió nada en 90 días, es una señal clara de que algo hay que hacer: liquidar, devolver al proveedor o discontinuar.",
        },
        {
          type: "heading",
          text: "Qué hacer con el stock muerto",
        },
        {
          type: "list",
          items: [
            "Liquidar con descuento: recuperar aunque sea parte del costo es mejor que mantenerlo inmovilizado.",
            "Negociar devoluciones con el proveedor: muchos aceptan reposición de stock sin movimiento.",
            "Bundling: combinar productos sin rotación con productos de alta demanda.",
            "Discontinuar: si el costo de mantenerlo supera el beneficio, salir ordenadamente.",
          ],
        },
        {
          type: "heading",
          text: "Cómo prevenirlo",
        },
        {
          type: "paragraph",
          text: "La solución de fondo es establecer puntos de reorden basados en datos reales: cuánto vendés por semana, cuánto tarda en llegar el proveedor, y qué margen de seguridad necesitás. Esto evita comprar de más por inercia o por presión del vendedor.",
        },
        {
          type: "paragraph",
          text: "Si querés que revisemos juntos el estado de tu inventario y calculemos cuánto capital tenés inmovilizado, escribime. El diagnóstico inicial es sin costo.",
        },
      ],
      en: [
        {
          type: "paragraph",
          text: "There's a type of business problem that's silent: inventory that doesn't sell. It doesn't generate an alert, doesn't appear on the income statement as a loss, and often isn't even visible because it's sitting in the warehouse. But it's there, taking up space and consuming capital.",
        },
        {
          type: "heading",
          text: "What is dead inventory?",
        },
        {
          type: "paragraph",
          text: "Dead inventory (also called non-moving stock) consists of products that recorded no sales over a given period — typically 60, 90, or 180 days, depending on the industry. There's no universal definition: what matters is that you define the threshold relevant to your business.",
        },
        {
          type: "paragraph",
          text: "The problem isn't just the physical space. It's the opportunity cost: that money could be in products that do sell, in working capital, or in operational improvements.",
        },
        {
          type: "heading",
          text: "How to identify it in Excel in 3 steps",
        },
        {
          type: "list",
          items: [
            "Export your current stock with product code, description, quantity, and unit cost.",
            "Cross-reference that stock with sales history from the past 90 days. Use VLOOKUP or SUMIF to pull units sold per product.",
            "Products with sales = 0 in that period are your dead inventory. Calculate the total value: quantity × unit cost.",
          ],
        },
        {
          type: "paragraph",
          text: "What you get at the end is a concrete number: how much capital you have tied up. In most SMEs I analyze, this number is surprising. It's not unusual to find that between 15% and 30% of inventory value had no movement in the past 3 months.",
        },
        {
          type: "heading",
          text: "ABC analysis as a complement",
        },
        {
          type: "paragraph",
          text: "ABC analysis classifies products into three groups based on their share of total sales: A (the 20% of products generating 80% of revenue), B (the next 30%), and C (the remaining 50% with the lowest impact). Category C products with low movement are the primary dead stock candidates.",
        },
        {
          type: "quote",
          text: "If a product is in category C and sold nothing in 90 days, it's a clear signal that action is needed: liquidate, return to supplier, or discontinue.",
        },
        {
          type: "heading",
          text: "What to do with dead stock",
        },
        {
          type: "list",
          items: [
            "Liquidate at a discount: recovering even part of the cost is better than keeping it frozen.",
            "Negotiate returns with the supplier: many accept stock replenishment for non-moving items.",
            "Bundling: combine low-rotation products with high-demand items.",
            "Discontinue: if the cost of maintaining it exceeds the benefit, exit in an orderly way.",
          ],
        },
        {
          type: "heading",
          text: "How to prevent it",
        },
        {
          type: "paragraph",
          text: "The root solution is to establish reorder points based on real data: how much you sell per week, how long your supplier takes to deliver, and what safety margin you need. This prevents over-buying out of habit or supplier pressure.",
        },
        {
          type: "paragraph",
          text: "If you'd like to review your inventory together and calculate how much capital you have tied up, reach out. The initial diagnosis is free.",
        },
      ],
    },
  },
  {
    slug: "el-error-mas-comun-en-reportes-excel",
    date: "2026-05-05",
    readTime: 5,
    tags: ["Excel", "Reportes", "Automatización"],
    title: {
      es: "El error más común al hacer reportes en Excel (y cómo corregirlo)",
      en: "The most common mistake when building Excel reports (and how to fix it)",
    },
    excerpt: {
      es: "La mayoría de las PyMEs invierte más tiempo construyendo reportes que usándolos. El problema no es Excel: es cómo se usa.",
      en: "Most SMEs spend more time building reports than using them. The problem isn't Excel — it's how it's used.",
    },
    content: {
      es: [
        {
          type: "paragraph",
          text: "Excel es la herramienta de análisis más usada en las PyMEs de Latinoamérica. Y también la más mal usada. No porque sea mala — es poderosa — sino porque casi nadie la usa para lo que realmente importa: tomar decisiones.",
        },
        {
          type: "heading",
          text: "El síntoma más común",
        },
        {
          type: "paragraph",
          text: "Cada semana, alguien en el equipo arma un reporte. Copia datos del sistema, los pega en Excel, les da formato, hace algunas fórmulas, y manda el archivo por mail. El proceso tarda 2 o 3 horas. Y cuando llega la reunión, nadie sabe muy bien qué conclusión sacar de los números.",
        },
        {
          type: "paragraph",
          text: "El tiempo se va en construir el reporte, no en entenderlo.",
        },
        {
          type: "heading",
          text: "El error de fondo: construir para la herramienta, no para la decisión",
        },
        {
          type: "paragraph",
          text: "La mayoría de los reportes en Excel se construyen respondiendo a la pregunta: '¿qué datos tengo disponibles?' Pero la pregunta correcta es: '¿qué decisión necesito tomar y qué información me falta para tomarla?'",
        },
        {
          type: "quote",
          text: "Un reporte que muestra todo no explica nada. Un reporte que responde una sola pregunta bien vale mil.",
        },
        {
          type: "heading",
          text: "Los tres errores más frecuentes",
        },
        {
          type: "list",
          items: [
            "Múltiples fuentes de verdad: el archivo de ventas está en un lugar, el de costos en otro, el de stock en otro. Cada uno tiene fechas y formatos distintos. El resultado es inconsistencia.",
            "Copia manual de datos: si el proceso de actualizar el reporte depende de que alguien copie y pegue, hay riesgo de error en cada iteración.",
            "Sin contexto ni conclusión: el reporte muestra el número pero no dice si ese número es bueno, malo o esperado. El lector tiene que interpretarlo solo.",
          ],
        },
        {
          type: "heading",
          text: "Cómo corregirlo sin sistemas caros",
        },
        {
          type: "paragraph",
          text: "No hace falta un ERP nuevo ni una plataforma de BI para mejorar esto. Con Excel bien estructurado y Power Query, podés automatizar la carga de datos y estandarizar las fuentes.",
        },
        {
          type: "list",
          items: [
            "Definí UNA fuente de datos por variable (ventas, costos, stock) y actualizala desde ahí siempre.",
            "Usá Power Query para conectar y transformar los datos sin copiar nada manualmente.",
            "Agregá una fila de conclusión en cada reporte: '¿qué dice este número? ¿qué hay que hacer?'",
          ],
        },
        {
          type: "paragraph",
          text: "El objetivo no es el reporte más lindo ni el más completo. Es el que te dice qué hacer cada semana con cinco minutos de lectura.",
        },
      ],
      en: [
        {
          type: "paragraph",
          text: "Excel is the most widely used analysis tool in Latin American SMEs. And also the most misused. Not because it's bad — it's powerful — but because almost no one uses it for what really matters: making decisions.",
        },
        {
          type: "heading",
          text: "The most common symptom",
        },
        {
          type: "paragraph",
          text: "Every week, someone on the team builds a report. They copy data from the system, paste it into Excel, format it, write some formulas, and email the file. The process takes 2 to 3 hours. And when the meeting comes around, nobody quite knows what conclusion to draw from the numbers.",
        },
        {
          type: "paragraph",
          text: "The time goes into building the report, not understanding it.",
        },
        {
          type: "heading",
          text: "The core mistake: building for the tool, not for the decision",
        },
        {
          type: "paragraph",
          text: "Most Excel reports are built answering the question: 'What data do I have available?' But the right question is: 'What decision do I need to make and what information am I missing to make it?'",
        },
        {
          type: "quote",
          text: "A report that shows everything explains nothing. A report that answers one question well is worth a thousand.",
        },
        {
          type: "heading",
          text: "The three most common mistakes",
        },
        {
          type: "list",
          items: [
            "Multiple sources of truth: the sales file is in one place, costs in another, stock in another. Each has different dates and formats. The result is inconsistency.",
            "Manual data copying: if the process of updating the report depends on someone copying and pasting, there's a risk of error in every iteration.",
            "No context or conclusion: the report shows the number but doesn't say whether that number is good, bad, or expected. The reader has to interpret it alone.",
          ],
        },
        {
          type: "heading",
          text: "How to fix it without expensive systems",
        },
        {
          type: "paragraph",
          text: "You don't need a new ERP or BI platform to improve this. With well-structured Excel and Power Query, you can automate data loading and standardize sources.",
        },
        {
          type: "list",
          items: [
            "Define ONE data source per variable (sales, costs, stock) and always update from there.",
            "Use Power Query to connect and transform data without copying anything manually.",
            "Add a conclusion row to every report: 'What does this number say? What needs to happen?'",
          ],
        },
        {
          type: "paragraph",
          text: "The goal isn't the prettiest or most complete report. It's the one that tells you what to do each week in five minutes of reading.",
        },
      ],
    },
  },
  {
    slug: "3-kpis-que-toda-pyme-deberia-revisar",
    date: "2026-04-28",
    readTime: 7,
    tags: ["KPIs", "Retail", "Business Intelligence"],
    title: {
      es: "3 KPIs que toda PyME debería revisar cada semana",
      en: "3 KPIs every SME should review every week",
    },
    excerpt: {
      es: "Muchas empresas miden decenas de indicadores pero no saben cuáles realmente importan. Estos tres son el punto de partida.",
      en: "Many companies track dozens of indicators but don't know which ones actually matter. These three are the starting point.",
    },
    content: {
      es: [
        {
          type: "paragraph",
          text: "Cada vez que analizo el sistema de métricas de una PyME, encuentro lo mismo: demasiados indicadores y poca claridad sobre cuáles son los que realmente mueven el negocio. El problema no es la falta de datos — es la falta de foco.",
        },
        {
          type: "paragraph",
          text: "Estos son los tres KPIs que recomiendo revisar todas las semanas, sin excepción, antes de agregar cualquier otro.",
        },
        {
          type: "heading",
          text: "1. Margen bruto por categoría",
        },
        {
          type: "paragraph",
          text: "El margen bruto agregado de la empresa dice poco. Lo que importa es el margen por categoría de producto, porque es ahí donde aparecen los problemas reales: una categoría puede estar vendiendo mucho pero perdiendo dinero en cada unidad.",
        },
        {
          type: "paragraph",
          text: "Cómo calcularlo: (Ventas netas - Costo de mercadería vendida) / Ventas netas × 100. Si tu margen bruto en una categoría bajó 3 puntos en dos semanas, hay algo que analizar: cambio de costos, descuentos no planificados, o mix de productos.",
        },
        {
          type: "quote",
          text: "Vendés mucho pero ganás poco. Ese es el síntoma de no tener el margen por categoría bajo la lupa.",
        },
        {
          type: "heading",
          text: "2. Rotación de inventario",
        },
        {
          type: "paragraph",
          text: "La rotación mide cuántas veces vendés y reponés tu stock en un período. Una rotación alta indica eficiencia; una baja, capital inmovilizado.",
        },
        {
          type: "paragraph",
          text: "Fórmula: Costo de mercadería vendida / Stock promedio del período. Si tu negocio tiene una rotación de 4, significa que cada trimestre renovás todo tu stock. Si es 1, hay algo que no está fluyendo.",
        },
        {
          type: "list",
          items: [
            "Rotación baja en toda la empresa: problema de ventas o sobrestock estructural.",
            "Rotación baja en categorías específicas: productos sin demanda o precios fuera de mercado.",
            "Rotación muy alta con quiebres de stock frecuentes: reposición lenta o pedidos insuficientes.",
          ],
        },
        {
          type: "heading",
          text: "3. Días de stock disponible (DSA)",
        },
        {
          type: "paragraph",
          text: "El DSA te dice cuántos días podés seguir vendiendo al ritmo actual antes de quedarte sin stock. Es el indicador que evita quiebres de stock y sobrestock al mismo tiempo.",
        },
        {
          type: "paragraph",
          text: "Fórmula: (Stock actual / Ventas promedio diarias). Si tu DSA es 45 días y tu proveedor tarda 15 días en entregar, tenés margen. Si el DSA es 12 días, ya estás en zona de riesgo.",
        },
        {
          type: "paragraph",
          text: "Lo valioso del DSA es que es un número de gestión, no solo de reporte: te dice cuándo hacer el próximo pedido.",
        },
        {
          type: "heading",
          text: "Por qué empezar con estos tres",
        },
        {
          type: "paragraph",
          text: "Margen, rotación y días de stock cubren las tres preguntas fundamentales de cualquier negocio de productos: ¿ganás por lo que vendés? ¿tu stock fluye? ¿cuándo necesitás reponerlo? Antes de medir NPS, satisfacción del cliente o decenas de variantes de conversión, estas tres métricas tienen que estar controladas.",
        },
        {
          type: "paragraph",
          text: "Si querés armar un tablero semanal con estos tres indicadores para tu negocio, puedo ayudarte a diseñarlo y automatizarlo en Power BI o Excel. Hablemos.",
        },
      ],
      en: [
        {
          type: "paragraph",
          text: "Every time I analyze an SME's metrics system, I find the same thing: too many indicators and too little clarity about which ones actually move the business. The problem isn't a lack of data — it's a lack of focus.",
        },
        {
          type: "paragraph",
          text: "These are the three KPIs I recommend reviewing every week, without exception, before adding any others.",
        },
        {
          type: "heading",
          text: "1. Gross margin by category",
        },
        {
          type: "paragraph",
          text: "The company's aggregate gross margin says little. What matters is the margin by product category, because that's where real problems appear: a category might be selling a lot but losing money on each unit.",
        },
        {
          type: "paragraph",
          text: "How to calculate it: (Net sales - Cost of goods sold) / Net sales × 100. If your gross margin in a category dropped 3 points in two weeks, there's something to analyze: cost changes, unplanned discounts, or product mix.",
        },
        {
          type: "quote",
          text: "You sell a lot but earn little. That's the symptom of not having category margin under a microscope.",
        },
        {
          type: "heading",
          text: "2. Inventory turnover",
        },
        {
          type: "paragraph",
          text: "Turnover measures how many times you sell and replenish your stock in a period. High turnover indicates efficiency; low turnover, tied-up capital.",
        },
        {
          type: "paragraph",
          text: "Formula: Cost of goods sold / Average stock for the period. If your business has a turnover of 4, it means you renew your entire stock every quarter. If it's 1, something isn't flowing.",
        },
        {
          type: "list",
          items: [
            "Low turnover across the whole company: sales problem or structural overstock.",
            "Low turnover in specific categories: products without demand or prices out of market.",
            "Very high turnover with frequent stockouts: slow replenishment or insufficient orders.",
          ],
        },
        {
          type: "heading",
          text: "3. Days of stock available (DSA)",
        },
        {
          type: "paragraph",
          text: "DSA tells you how many days you can keep selling at the current pace before running out of stock. It's the indicator that prevents stockouts and overstock at the same time.",
        },
        {
          type: "paragraph",
          text: "Formula: Current stock / Average daily sales. If your DSA is 45 days and your supplier takes 15 days to deliver, you have margin. If DSA is 12 days, you're already in the risk zone.",
        },
        {
          type: "paragraph",
          text: "The value of DSA is that it's a management number, not just a reporting one: it tells you when to place the next order.",
        },
        {
          type: "heading",
          text: "Why start with these three",
        },
        {
          type: "paragraph",
          text: "Margin, turnover, and days of stock cover the three fundamental questions of any product business: do you earn from what you sell? does your stock flow? when do you need to replenish it? Before measuring NPS, customer satisfaction, or dozens of conversion variants, these three metrics need to be under control.",
        },
        {
          type: "paragraph",
          text: "If you'd like to build a weekly dashboard with these three indicators for your business, I can help you design and automate it in Power BI or Excel. Let's talk.",
        },
      ],
    },
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(dateStr: string, lang: "es" | "en"): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString(lang === "es" ? "es-AR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
