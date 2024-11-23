import CoreConcept from "./CoreConcept";
import "./CoreConcept.css";
import { CORE_CONCEPTS } from "../data-with-examples";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((item, index) => (
          <CoreConcept {...item} key={index}/>
        ))}
      </ul>
    </section>
  );
}
