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

    const synonyms = document.createElement("div");
    synonyms.classList.add("synonyms");

    if (data.meanings[i].synonyms.length > 0) {
      const synonyms_title = document.createElement("h4");
      synonyms_title.innerText = "Synonyms";
      synonyms_title.classList.add("synonyms-title");

      const synonyms_contents = document.createElement("div");
      synonyms_contents.classList.add("synonyms-contents");

      for (let j = 0; j < data.meanings[i].synonyms.length; j++) {
        const synonyms_item = document.createElement("span");
        synonyms_item.classList.add("synonyms-item");
        synonyms_item.innerText = data.meanings[i].synonyms[j];

        synonyms_contents.append(synonyms_item);
      }

      synonyms.append(synonyms_title);
      synonyms.append(synonyms_contents);
    }

    const antonyms = document.createElement("div");
    synonyms.classList.add("antonyms");

    if (data.meanings[i].antonyms.length > 0) {
      const antonyms_title = document.createElement("h4");
      antonyms_title.innerText = "Antonyms";
      antonyms_title.classList.add("antonyms-title");

      const antonyms_contents = document.createElement("div");
      antonyms_contents.classList.add("antonyms-contents");

      for (let j = 0; j < data.meanings[i].antonyms.length; j++) {
        const antonyms_item = document.createElement("span");
        antonyms_item.classList.add("antonyms-item");
        antonyms_item.innerText = data.meanings[i].antonyms[j];

        antonyms_contents.append(antonyms_item);
      }

      antonyms.append(antonyms_title);
      antonyms.append(antonyms_contents);
    }

    definition.append(definition_list);
    meanings.append(definition);
    meanings.append(synonyms);
    meanings.append(antonyms);

    searchedArea_contents.append(meanings);
  }
}

console.log("hello", showData);
