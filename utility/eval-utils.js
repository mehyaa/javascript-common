const evaluatorCache = {};

export function getEvaluator(scr) {
    let evaluator = evaluatorCache[scr];

    if (evaluator) {
        return evaluator;
    }

    evaluator = new Function(`with(this) { return ${scr} }`);

    evaluatorCache[scr] = evaluator;

    return evaluator;
}

export function evalInContext(scr, context, suppressError = true) {
    try {
        const evaluator = getEvaluator(scr);

        return evaluator.call(context);
    }
    catch (error) {
        if (suppressError) {
            return null;
        }

        throw error;
    }
}