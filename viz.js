const mockedAnnotations = [
  {
    id: "123",
    note: "This is sample note",
  },
  {
    id: "1234",
    note: "This is sample note 2",
  },
];

const visObject = {
  create: function (element, config) {
    // element.innerHTML = "<h1>Custom notes component!</h1>";
  },

  updateAsync: function (
    data,
    element,
    config,
    queryResponse,
    details,
    doneRendering
  ) {
    // note
    const vizNote = document.createElement("div");
    vizNote.setAttribute("id", "note");
    vizNote.style.width = "400px";
    vizNote.style.height = "200px";
    vizNote.style.border = "1px solid gray";
    vizNote.style.marginBottom = "10px";

    // input
    const vizCanvas = document.createElement("input");
    vizCanvas.setAttribute("id", "myInput");
    vizCanvas.style.width = "200px";
    vizCanvas.style.height = "30px";

    // submit button
    const vizButton = document.createElement("button");
    vizButton.setAttribute("id", "submitButton");
    vizButton.style.width = "200px";
    vizButton.style.height = "35px";
    vizButton.innerText = "Submit";

    // mount components
    element.appendChild(vizNote);
    element.appendChild(vizCanvas);
    element.appendChild(vizButton);

    console.log(queryResponse);
    console.log(config);
    console.log(details);

    doneRendering();
  },
};

looker.plugins.visualizations.add(visObject);
