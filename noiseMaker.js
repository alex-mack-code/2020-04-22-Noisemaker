// noisemaker JS file

const synth = new Tone.Synth().toMaster();

window.onload = function()
{
    
    //Defining the note functions
      function f() {
        synth.triggerAttackRelease("F4", "8n");
      }

      function fsharp() {
        synth.triggerAttackRelease("F#4", "8n");
      }
      
      function g() {
        synth.triggerAttackRelease("G4", "8n");
      }

      function gsharp() {
        synth.triggerAttackRelease("G#4", "8n");
      }

      function a() {
        synth.triggerAttackRelease("A4", "8n");
      }

      function asharp() {
        synth.triggerAttackRelease("A#4", "8n");
      }

      function b() {
        synth.triggerAttackRelease("B4", "8n");
      }

      function c() {
        synth.triggerAttackRelease("C5", "8n");
      }

      function csharp() {
        synth.triggerAttackRelease("C#5", "8n");
      }

      function d() {
        synth.triggerAttackRelease("D5", "8n");
      }

      function dsharp() {
        synth.triggerAttackRelease("D#5", "8n");
      }

      function e() {
        synth.triggerAttackRelease("E5", "8n");
      }

      
    //Assigning the functionality of the notes

    //F key
    document.getElementById("whitef").onclick = function() {f()};

    //F# key
    document.getElementById("blackfs").onclick = function() {fsharp()};

    //G key
    document.getElementById("whiteg").onclick = function() {g()};

    //G# key
    document.getElementById("blackgs").onclick = function() {gsharp()};

    //A key
    document.getElementById("whitea").onclick = function() {a()};

    //A# Key
    document.getElementById("blackas").onclick = function() {asharp()};

    //B key
    document.getElementById("whiteb").onclick = function() {b()};

    //C key
    document.getElementById("whitec").onclick = function() {c()};

    //C# key
    document.getElementById("blackcs").onclick = function() {csharp()};

    //D key
    document.getElementById("whited").onclick = function() {d()};

    //D# key
    document.getElementById("blackds").onclick = function() {dsharp()};

    //E key
    document.getElementById("whitee").onclick = function() {e()};






}





