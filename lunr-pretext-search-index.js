var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon",
  "level": "1",
  "url": "colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " copyright  This work includes materials used under license from the following works:   Calculus 8\/e by Stewart     "
},
{
  "id": "lec-4-sec1",
  "level": "1",
  "url": "lec-4-sec1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Observational vs. Experimental Studies",
  "body": " Observational vs. Experimental Studies      Observational Study : data withotu any interference of researchers in data generation process     Experimental Study : data collected by planned procedure of researchers to confirm their claim     Treatment (factor) : experimental condition under study     Response : the measured outcome resulting from experiment     Experimental Unit : Object to which a treatment is applied     Observational (sampling) Unit : object on which response is measured         Experimental Error : variation in the responses among experimental units that are assigned to the same treatment  Such variability would also exist among units across different treatment levels     Replication : an independent observation at a treatment level. When each treatment level is applied to several experimental units, we have more than a single replication  Having more replications would be helpful to measure experimental error and eventually leads to more precise inference       Consider the following experiment. Four types of protective coatings for frying pans are to be evaluated. Five frying pans are randomly assigned to each of the four coatings. The abrasion resistance of the coating is measured at three locations on each of the 20 pans.  Identify the following: treatments, response, experimental units, observational units, and replication.       Treatments: four types of protective coatings    Response: Abrasion resistance of the coating    Experimental unit: Frying pan    Observational unit: Particular locations on the frying pan    Replication: Five frying pans for each treatment       "
},
{
  "id": "p-3",
  "level": "2",
  "url": "lec-4-sec1.html#p-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Observational Study Experimental Study Treatment (factor) Response Experimental Unit Observational (sampling) Unit "
},
{
  "id": "p-10",
  "level": "2",
  "url": "lec-4-sec1.html#p-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Experimental Error Replication "
},
{
  "id": "example-1",
  "level": "2",
  "url": "lec-4-sec1.html#example-1",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": "  Consider the following experiment. Four types of protective coatings for frying pans are to be evaluated. Five frying pans are randomly assigned to each of the four coatings. The abrasion resistance of the coating is measured at three locations on each of the 20 pans.  Identify the following: treatments, response, experimental units, observational units, and replication.       Treatments: four types of protective coatings    Response: Abrasion resistance of the coating    Experimental unit: Frying pan    Observational unit: Particular locations on the frying pan    Replication: Five frying pans for each treatment      "
},
{
  "id": "lec-4-sec2",
  "level": "1",
  "url": "lec-4-sec2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Completely Randomized Design (CRD)",
  "body": " Completely Randomized Design (CRD)  We are interested in the effect of factor\/treatment on response.   Completely Randomized Design (CRD) : independent and completely random assignments of treatments to experimental units  In CRD, each experimental unit has the same probability of having each treatment  ANOVA works under these assumptions: random and independent samples    Suppose we study the effect of three different fertilizers on corn yields with 15 1-acre plots. Each fertilizer is assigned to 5 randomly selected plots.  Due to a gradient in the 15-acre field affecting yields, fertilizers are randomly assigned to 1-acre plots within strips in the field.    The original setup is a CRD, as all units are homogeneous. However, due to the gradient, our response (which is crop yields) would be affected by both fertilizers and the gradient.  The solution is to randomly assign, within a 3x5 grid, treatments to a cell in a column. However, when we specificaly assign a treatments to 3x1 strips, we break the CRD designation because the equal probability condition will be broken.    "
},
{
  "id": "p-24",
  "level": "2",
  "url": "lec-4-sec2.html#p-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Completely Randomized Design (CRD) "
},
{
  "id": "example-2",
  "level": "2",
  "url": "lec-4-sec2.html#example-2",
  "type": "Example",
  "number": "1.2.1",
  "title": "",
  "body": "  Suppose we study the effect of three different fertilizers on corn yields with 15 1-acre plots. Each fertilizer is assigned to 5 randomly selected plots.  Due to a gradient in the 15-acre field affecting yields, fertilizers are randomly assigned to 1-acre plots within strips in the field.    The original setup is a CRD, as all units are homogeneous. However, due to the gradient, our response (which is crop yields) would be affected by both fertilizers and the gradient.  The solution is to randomly assign, within a 3x5 grid, treatments to a cell in a column. However, when we specificaly assign a treatments to 3x1 strips, we break the CRD designation because the equal probability condition will be broken.   "
},
{
  "id": "lec-4-sec3",
  "level": "1",
  "url": "lec-4-sec3.html",
  "type": "Section",
  "number": "1.3",
  "title": "Linear Model Approach",
  "body": " Linear Model Approach  This is a description of a CRD experiment based on a statistical model.  We have where is the th observation of the treatment level , is the treatment level , and denotes the random error associated with unit in treatment level such that This model is also referred to as a \"mean model\"   is an unknown, fixed (and thus, non-random) parameter  The assumption on in the statement of above is equivalent to the one-way ANOVA assumptions: independent, random samples, and that there are normal popualations with equal variances  An alternative way of writing is referred to as an \"effects model\" such that where is the overall mean and is the th treatment level effect.  In this case, and are unknown, fixed (and thus, non random) parameters  We have a handful of comparisons:      Expectation of   Variance of     Means Model          Effects Model          For hypothesis testing:   The means model takes the hypotheses for all vs. the alternative that for some at least one pair     The effects model takes the hypotheses for all vs. the alternative that at least one is non-zero     The effects model also has different point estimates:              We may also note that where                   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
