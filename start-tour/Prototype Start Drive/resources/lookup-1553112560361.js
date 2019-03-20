(function(window, undefined) {
  var dictionary = {
    "b8b49422-8c2e-4704-b90d-8e45ab3b07f2": "On Tour (Running for Customer)",
    "757ca6ad-b9e4-448b-a2d2-4fc4ae0a3507": "Dashboard",
    "45420977-ccb0-44c3-8609-8033d81b7649": "Slide menu screen",
    "725aa2ce-f2b7-4a6d-a35e-156864cf4f70": "On Tour (Start Customer)",
    "c4dc1e9c-923a-447a-8f9e-03b097671e61": "On Tour Before Finish",
    "74b5b120-b8dd-4ade-a080-73cb54d20681": "Loading Screen",
    "af87fe9b-f3bd-46d9-aed1-d5edebabac01": "On Tour (Finish Customer)",
    "62263413-1c5f-4ad9-80ce-fbc4a924f31c": "On Tour Start",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);