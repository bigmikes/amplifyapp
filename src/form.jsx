import React from "react";
import JSONSchemaForm from "react-jsonschema-form";
import "bootstrap/dist/css/bootstrap.css";

const postSchema = {
    "title": "Example for rendering currency component",
    "description": "A simple form with currency component",
    "type": "object",
    "properties": {
      "1": {
        "type": "string",
        "title": "Quanto sei brutto?",
        "enum": ["Poco", "Molto", "Moltissimo"]
      },
      "2": {
        "type": "string",
        "title": "Quanto sei mostro?",
        "enum": ["Poco", "Molto", "Moltissimo"]
      },
    }
  };

const uiSchema = {
    "1": {
       "ui:widget": "radio",
       "ui:options": {
         "inline": true
       }
     },
     "2": {
        "ui:widget": "radio",
        "ui:options": {
          "inline": true
        }
      }
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
