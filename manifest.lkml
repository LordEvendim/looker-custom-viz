constant: vis_id {
  value: "default_id"
  export: override_optional
}
constant: vis_label {
    value: "default_label"
    export: override_optional
}
visualization: {
    id: "@{vis_id}"
    label: "@{vis_label}"
    file: "viz.js"
    sri_hash: "my_sri_hash"
    dependencies: [
      "https://code.jquery.com/jquery-2.2.4.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js"
    ]
}