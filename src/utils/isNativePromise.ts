// https://stackoverflow.com/questions/27746304/how-do-i-tell-if-an-object-is-a-promise
export function isNativePromise(value: any) {
  return value && typeof value.constructor === "function"
    && Function.prototype.toString.call(value.constructor).replace(/\(.*\)/, "()")
    === Function.prototype.toString.call(/*native object*/Function)
      .replace("Function", "Promise") // replacing Identifier
      .replace(/\(.*\)/, "()"); // removing possible FormalParameterList 
}
