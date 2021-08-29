import React from "react";
import JSONSchemaForm from "react-jsonschema-form";
import "bootstrap/dist/css/bootstrap.css";

const postSchema = {
    "title": "Il Test",
    "description": "Vero Uomo o Inetto? Buono o Mostro? Gentiluomo o Rude? Scopri chi sei veramente senza lo sforzo dell'introspezione. Scoprilo semplicemente indicando quanto sei d'accordo con le seguenti affermazioni.",
    "type": "object",
    "properties": {
      "1": {
        "type": "string",
        "title": "Ho fame. La mia pizza e' pronta. Una anziana signora chiede un passaggio a casa. La liquido con una scusa.",
        "enum": ["Per niente d'accordo", "Poco d'accordo", "Molto d'accordo", "Completamente d'accordo"]
      },
      "2": {
        "type": "string",
        "title": "Spiego le regole del gioco per la terza volta consecutiva. Lei ancora non le capisce. Quindi la offendo urlando.",
        "enum": ["Per niente d'accordo", "Poco d'accordo", "Molto d'accordo", "Completamente d'accordo"]
      },
      "3": {
        "type": "string",
        "title": "Sto discutendo di un argomento complesso e controverso. Ho molto probabilmente ragione.",
        "enum": ["Per niente d'accordo", "Poco d'accordo", "Molto d'accordo", "Completamente d'accordo"]
      },
      "4": {
        "type": "string",
        "title": "Sono ad una gara di matematica contro una ragazza. Non mi sembra una competizione equa e mi lamento con i giudici.",
        "enum": ["Per niente d'accordo", "Poco d'accordo", "Molto d'accordo", "Completamente d'accordo"]
      },
      "5": {
        "type": "string",
        "title": "Sono a cena con amici. Ho il sospetto che l'insalata sia scaduta. Non voglio sentirmi male. Aspetto che qualcun altro l'assaggi.",
        "enum": ["Per niente d'accordo", "Poco d'accordo", "Molto d'accordo", "Completamente d'accordo"]
      },
      "6": {
        "type": "string",
        "title": "Sono in ritardo per prendere il treno. Un signore di colore con la sua bambina mi offre un passaggio in macchina. Preferisco camminare.",
        "enum": ["Per niente d'accordo", "Poco d'accordo", "Molto d'accordo", "Completamente d'accordo"]
      },
      "7": {
        "type": "string",
        "title": "Il pomeriggio torno stanco da lavoro. Invidio i miei amici che hanno lavori piu' semplici.",
        "enum": ["Per niente d'accordo", "Poco d'accordo", "Molto d'accordo", "Completamente d'accordo"]
      },
      "8": {
        "type": "string",
        "title": "I miei amici discutono di argomenti con cui mi trovo a disagio. Preferisco ignorarli.",
        "enum": ["Per niente d'accordo", "Poco d'accordo", "Molto d'accordo", "Completamente d'accordo"]
      },
      "9": {
        "type": "string",
        "title": "Mi fanno notare un mio comportamento scorretto. Solo io mi conosco nel profondo. Rispondo a tono.",
        "enum": ["Per niente d'accordo", "Poco d'accordo", "Molto d'accordo", "Completamente d'accordo"]
      },
      "10": {
        "type": "string",
        "title": "Ho avuto una brutta esperienza con due idraulici diversi. Tutti gli idraulici devono essere uguali. Mi aggiusto il lavandino da solo.",
        "enum": ["Per niente d'accordo", "Poco d'accordo", "Molto d'accordo", "Completamente d'accordo"]
      },
      "11": {
        "type": "string",
        "title": "Pietro ha spesso opinioni divergenti con il suo gruppo di amici, allora decide che non ha piu' senso frequentarli e abbandona il gruppo. Condivido la decisione di Pietro.",
        "enum": ["Per niente d'accordo", "Poco d'accordo", "Molto d'accordo", "Completamente d'accordo"]
      },
      "12": {
        "type": "string",
        "title": "Il mio amico Fabrizio non va all'universita'. Si vede che non ha voglia di farsi il culo nella vita.",
        "enum": ["Per niente d'accordo", "Poco d'accordo", "Molto d'accordo", "Completamente d'accordo"]
      },
      "13": {
        "type": "string",
        "title": "Non mi piace giocare a calcietto. I miei amici una sera organizzano una partita a mia insaputa. Non mi sembra giusto.",
        "enum": ["Per niente d'accordo", "Poco d'accordo", "Molto d'accordo", "Completamente d'accordo"]
      },
      "14": {
        "type": "string",
        "title": "Una tua giovane amica e' giu' di morale. Per farla stare meglio, gli dici che non e' male e che te la faresti volentieri.",
        "enum": ["Per niente d'accordo", "Poco d'accordo", "Molto d'accordo", "Completamente d'accordo"]
      },
      "15": {
        "type": "string",
        "title": "Internet e' pieno di fake news. Pero' mio zio mi ha detto che gli immigrati ci rubano il lavoro. Gli credo.",
        "enum": ["Per niente d'accordo", "Poco d'accordo", "Molto d'accordo", "Completamente d'accordo"]
      },
      "16": {
        "type": "string",
        "title": "Vedo una persona in difficolta' che tutti disprezzano. Mi dicono che e' una perdita di tempo, tanto non ascolta. L'aiuto.",
        "enum": ["Per niente d'accordo", "Poco d'accordo", "Molto d'accordo", "Completamente d'accordo"]
      },
      "17": {
        "type": "string",
        "title": "Giovanni e' un po' buffo. Inciampa e cade. Gli rido in faccia.",
        "enum": ["Per niente d'accordo", "Poco d'accordo", "Molto d'accordo", "Completamente d'accordo"]
      },
      "18": {
        "type": "string",
        "title": "Il gruppo e' di nuovo a discutere su topic idioti. Non commento, sono superiore a tutto cio' e poi mi devo riposare che dopo non ho nulla da fare.",
        "enum": ["Per niente d'accordo", "Poco d'accordo", "Molto d'accordo", "Completamente d'accordo"]
      },
      "19": {
        "type": "string",
        "title": "E' difficile lavorare sui propri difetti. Meglio lamentarsene.",
        "enum": ["Per niente d'accordo", "Poco d'accordo", "Molto d'accordo", "Completamente d'accordo"]
      },
      "20": {
        "type": "string",
        "title": "Questo test non puo' essere davvero stato scritto, non c'e' liberta' parola.",
        "enum": ["Per niente d'accordo", "Poco d'accordo", "Molto d'accordo", "Completamente d'accordo"]
      },
    }
  };

const uiSchema = {
    "1": {
       "ui:widget": "radio",
       "ui:options": {
         "inline": false
       }
     },
     "2": {
        "ui:widget": "radio",
        "ui:options": {
          "inline": false
        }
      },
      "3": {
        "ui:widget": "radio",
        "ui:options": {
          "inline": false
        }
      },
      "4": {
        "ui:widget": "radio",
        "ui:options": {
          "inline": false
        }
      },
      "5": {
        "ui:widget": "radio",
        "ui:options": {
          "inline": false
        }
      },
      "6": {
        "ui:widget": "radio",
        "ui:options": {
          "inline": false
        }
      },
      "7": {
        "ui:widget": "radio",
        "ui:options": {
          "inline": false
        }
      },
      "8": {
        "ui:widget": "radio",
        "ui:options": {
          "inline": false
        }
      },
      "9": {
        "ui:widget": "radio",
        "ui:options": {
          "inline": false
        }
      },
      "10": {
        "ui:widget": "radio",
        "ui:options": {
          "inline": false
        }
      },
      "11": {
        "ui:widget": "radio",
        "ui:options": {
          "inline": false
        }
      },
      "12": {
        "ui:widget": "radio",
        "ui:options": {
          "inline": false
        }
      },
      "13": {
        "ui:widget": "radio",
        "ui:options": {
          "inline": false
        }
      },
      "14": {
        "ui:widget": "radio",
        "ui:options": {
          "inline": false
        }
      },
      "15": {
        "ui:widget": "radio",
        "ui:options": {
          "inline": false
        }
      },
      "16": {
        "ui:widget": "radio",
        "ui:options": {
          "inline": false
        }
      },
      "17": {
        "ui:widget": "radio",
        "ui:options": {
          "inline": false
        }
      },
      "18": {
        "ui:widget": "radio",
        "ui:options": {
          "inline": false
        }
      },
      "19": {
        "ui:widget": "radio",
        "ui:options": {
          "inline": false
        }
      },
      "20": {
        "ui:widget": "radio",
        "ui:options": {
          "inline": false
        }
      },
   };

export default function Form({ onSubmit }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <JSONSchemaForm onSubmit={onSubmit} schema={postSchema} uiSchema={uiSchema}/>
        </div>
      </div>
    </div>
  );
}
