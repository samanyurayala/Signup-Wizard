let value = document.getElementById("value");
let text = document.getElementById("text");
let letter_selector_first = `<select name="letters" class="letter_first">
        <option value=""></option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
        <option value="F">F</option>
        <option value="G">G</option>
        <option value="H">H</option>
        <option value="I">I</option>
        <option value="J">J</option>
        <option value="K">K</option>
        <option value="L">L</option>
        <option value="M">M</option>
        <option value="N">N</option>
        <option value="O">O</option>
        <option value="P">P</option>
        <option value="Q">Q</option>
        <option value="R">R</option>
        <option value="S">S</option>
        <option value="T">T</option>
        <option value="U">U</option>
        <option value="V">V</option>
        <option value="W">W</option>
        <option value="X">X</option>
        <option value="Y">Y</option>
        <option value="Z">Z</option>
      </select>`
let letter_selector = `<select name="letters" id="letter">
        <option value=""></option>
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
        <option value="d">d</option>
        <option value="e">e</option>
        <option value="f">f</option>
        <option value="g">g</option>
        <option value="h">h</option>
        <option value="i">i</option>
        <option value="j">j</option>
        <option value="k">k</option>
        <option value="l">l</option>
        <option value="m">m</option>
        <option value="n">n</option>
        <option value="o">o</option>
        <option value="p">p</option>
        <option value="q">q</option>
        <option value="r">r</option>
        <option value="s">s</option>
        <option value="t">t</option>
        <option value="u">u</option>
        <option value="v">v</option>
        <option value="w">w</option>
        <option value="x">x</option>
        <option value="y">y</option>
        <option value="z">z</option>
      </select>`
let letter_first = document.querySelectorAll(".letter_first");
let letter = document.querySelectorAll(".letter");

letter_first.forEach(
    (element) => { element.innerHTML = letter_selector_first; })
letter.forEach((element) => { element.innerHTML = letter_selector; });

value.addEventListener("input", function() { text.textContent = value.value; });