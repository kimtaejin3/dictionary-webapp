let showData;
const search_icon = document.querySelector(".search-icon");
const search_text = document.querySelector(".search-text");
const searchedArea = document.querySelector(".searchedArea");
const searchedArea_title = document.querySelector(".searchedArea-header h2");
const ponetics = document.querySelector(".searchedArea-header span");

const searchedArea_contents = document.querySelector(".searchedArea-contents");

search_text.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    get_response(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${search_text.value}`
    ).then((data) => {
      showData = data[0];
      parse(showData);
    });
  }
});

search_icon.addEventListener("click", () => {
  get_response(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${search_text.value}`
  ).then((data) => {
    showData = data[0];
    parse(showData);
  });
});

function parse(data) {
  searchedArea_title.innerText = data.word;
  ponetics.innerText = data.phonetic;
  searchedArea_contents.innerText = "";
  const meanings_size = data.meanings.length;

  for (let i = 0; i < meanings_size; i++) {
    const meanings = document.createElement("div");
    meanings.classList.add("meanings");

    const meanings_partOfSpeech = document.createElement("h4");
    meanings_partOfSpeech.classList.add("meanings-partOfSpeech");
    meanings_partOfSpeech.innerText = data.meanings[i].partOfSpeech;

    meanings.append(meanings_partOfSpeech);

    const definition = document.createElement("div");
    definition.classList.add("definition");
    const definition_title = document.createElement("h4");
    definition_title.classList.add("definition-title");
    definition_title.innerText = "Meaning";

    definition.append(definition_title);

    const definition_list = document.createElement("ul");
    definition_list.classList.add("definition-list");
    console.log(data.meanings);
    for (let j = 0; j < data.meanings[i].definitions.length; j++) {
      const definition_list_item = document.createElement("li");
      definition_list_item.classList.add("definition-list-item");

      const definition_list_item_text = document.createElement("p");
      definition_list_item_text.innerText =
        data.meanings[i].definitions[j].definition;
      definition_list_item.append(definition_list_item_text);

      const definition_list_example = document.createElement("p");
      definition_list_example.classList.add("definition-list-example");
      if (data.meanings[i].definitions[j].example !== undefined) {
        definition_list_example.innerText =
          data.meanings[i].definitions[j].example;
      }

      definition_list_item.append(definition_list_example);

      definition_list.append(definition_list_item);
    }
    definition.append(definition_list);
    meanings.append(definition);
    searchedArea_contents.append(meanings);
  }
}

console.log("hello", showData);
