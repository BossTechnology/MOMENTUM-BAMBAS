En el archivo index de este directorio, se define la data del componente journey.

Se exporta una constante 'journey' donde es un array de objectos:

````Javascript
[
  {
    _id: '...', // string (requerido)
    className: '...', // string (opcional)

    stages: [
      {
        _id: '...', // string (requerido)
        name: '...', // string (opcional) Nombre de la stage
        stageId: 'drill', // string (requerido) ID de la stage
        icon: null, // React.Component (opcional) Icono de la stage
        aiMessage: '...', // string (opcional) Descripcion de popup de AI
        ai: true, // boolean (opcional) Valida si debe mostrar popup de AI
        active: true, // boolean (requerido) muestra si la 'stage' esta activa o inactiva
        size: 'big' // string (requerido) debe ser big o small
        percentage: 0 // number (opcional) debe ser entre 0 - 100

      }
    ]
  }
]
````