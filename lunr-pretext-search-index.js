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
  "body": " Linear Model Approach  This is a description of a CRD experiment based on a statistical model.  We have where is the th observation of the treatment level , is the treatment level , and denotes the random error associated with unit in treatment level such that This model is also referred to as a \"mean model\"   is an unknown, fixed (and thus, non-random) parameter  The assumption on in the statement of above is equivalent to the one-way ANOVA assumptions: independent, random samples, and that there are normal popualations with equal variances  An alternative way of writing is referred to as an \"effects model\" such that where is the overall mean and is the th treatment level effect.  In this case, and are unknown, fixed (and thus, non random) parameters  We have a handful of comparisons:      Expectation of   Variance of     Means Model          Effects Model          For hypothesis testing:   The means model takes the hypotheses for all vs. the alternative that for some at least one pair     The effects model takes the hypotheses for all vs. the alternative that at least one is non-zero     The effects model also has different point estimates:              We may also note that we have a similar statement to the TSS decomposition in ANOVA: where                   "
},
{
  "id": "lec-5-sec1",
  "level": "1",
  "url": "lec-5-sec1.html",
  "type": "Section",
  "number": "2.1",
  "title": "One-way ANOVA: Assumptions",
  "body": " One-way ANOVA: Assumptions  In one-way ANOVA, we assume:        Homoscedasticity:     Independence of each sample     Recall the \"effects\" model for one-way ANOVA such that where is the th observation of treatment level ; are the overall mean and the the treatment level effect; and is the random error associated with such that   Note that the assumption on in the previous paragraph is equivalent to the three conditions above.  These three assumptions guarantee a valid statistical inference based on ANOVA; it also makes the sampling distribution of our test statistic follow the F distribution.  ANOVA is robust to moderate deviations from normality, but extreme skewness or outliers create problems because we assume normality and equal variance in ANOVA.  Our solution is to use the residuals to make a guess of the distribution of . Note that   If the normality assumption were true, then would be normally distributed as well; if were small, we would collect the from all th treatment levels.  Under normality and homoscedasticity, the set of residuals from all treatment levels, i.e. the collection would seem to be from the same normal distribution  "
},
{
  "id": "lec-5-sec2",
  "level": "1",
  "url": "lec-5-sec2.html",
  "type": "Section",
  "number": "2.2",
  "title": "One-way ANOVA: Graphics",
  "body": " One-way ANOVA: Graphics  Two useful graphics to check assumptions are boxplots\/histograms and quantile-quantile (QQ) plots.   QQ plot : the scatterplot of the sample quantiles against the theoretical quantiles of the corresponding observations that are expected if the data are from the normal distribution.  The points on a QQ plot should cluster around a straight line for a normally distributed variable.   "
},
{
  "id": "p-60",
  "level": "2",
  "url": "lec-5-sec2.html#p-60",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "QQ plot "
},
{
  "id": "lec-5-sec3",
  "level": "1",
  "url": "lec-5-sec3.html",
  "type": "Section",
  "number": "2.3",
  "title": "One-way ANOVA: Check Normality",
  "body": " One-way ANOVA: Check Normality  What happens if our underlying assumptions appear to be non-normal?   We can use the Kruskal-Wallis test (see Ch. 14 in textbook)    We can use non-parametric statistical models, which are distribution-free    We can use some parametric statistical models (like ANOVA): these are more powerful if the underlying assumptions are met. ANOVA in particular is known to be robust to non-normality.    It's always helpful to use graphics to check assumptions BEFORE analysis     "
},
{
  "id": "lec-5-sec4",
  "level": "1",
  "url": "lec-5-sec4.html",
  "type": "Section",
  "number": "2.4",
  "title": "One-way ANOVA: Homogeneity of Variances",
  "body": " One-way ANOVA: Homogeneity of Variances  For comparison of two population variances, recall that we have used the test statistic F such that under the null hypothesis . How do we generalize this to compare more than two variances?  Consider the null versus the alternative for some   One test is Hartley's F-max test . It requires the balanced case, i.e. . Let and where denotes the sample variance of the th treatment level.  The test statistic can be given as where is the F-max distribution (which is distinct from the usual F distribution) with and .  We reject if ; the critical value can be found in the F-max table.    An experiment to compare the yield of four varieties of rice was conducted. Each of 16 plots on a test farm where soil fertility was fairly homogeneous was treated alike relative to water and fertilizer. Four plots were randomly assigned each of the four varieties of rice.    Variety  Yields    1  934  1041  1028  935    2  880  963  924  946    3  987  951  976  840    4  992  1143  1140  1191      Compute each variance: and identify the values of and : Now, the statistic is given by From the F-max table, we get Under we reject if , so we conclude there is insufficient evidence to reject the hypothesis of equal variances.    Another test is Bartlett's test . The test statistic is given by where For this test, we don't require the balanced case. Additionally, the test statistic approximately follows under the null hypothesis. We set and reject if .  Note: Bartlett's test is sensitive to departures from the normality assumption.  A third test is Levene's test : let denote the absolute value of the residual . We perform one-way ANOVA by treating the as our observations.  Levene's test is based on the F test statistic: under , where and We reject the null hypothesis of equal variance if   Once we conduct the hypothesis testing for homogeneity of variances, we consider the following:   If we fail to reject the null, we go with one-way ANOVA    If we reject the null, we have two choices:   Apply Welch's ANOVA with each instead of the pooled variance. Calculate the degrees of freedom for error just like what we did in the two-sample t-test for unequal variances    Perform data transformation to stabilize the variance        "
},
{
  "id": "p-69",
  "level": "2",
  "url": "lec-5-sec4.html#p-69",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hartley's F-max test "
},
{
  "id": "example-3",
  "level": "2",
  "url": "lec-5-sec4.html#example-3",
  "type": "Example",
  "number": "2.4.1",
  "title": "",
  "body": "  An experiment to compare the yield of four varieties of rice was conducted. Each of 16 plots on a test farm where soil fertility was fairly homogeneous was treated alike relative to water and fertilizer. Four plots were randomly assigned each of the four varieties of rice.    Variety  Yields    1  934  1041  1028  935    2  880  963  924  946    3  987  951  976  840    4  992  1143  1140  1191      Compute each variance: and identify the values of and : Now, the statistic is given by From the F-max table, we get Under we reject if , so we conclude there is insufficient evidence to reject the hypothesis of equal variances.   "
},
{
  "id": "p-74",
  "level": "2",
  "url": "lec-5-sec4.html#p-74",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bartlett's test "
},
{
  "id": "p-76",
  "level": "2",
  "url": "lec-5-sec4.html#p-76",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Levene's test "
},
{
  "id": "lec-5-sec5",
  "level": "1",
  "url": "lec-5-sec5.html",
  "type": "Section",
  "number": "2.5",
  "title": "One-way ANOVA: Data Transformation",
  "body": " One-way ANOVA: Data Transformation  Transformations on would be helpful to stabilize the variance . Then, we can perform ANOVA with the transformed data.  Some widely used transformations are: , , and     Relationship  Transformation                    Caution: departures from normality may happen after transformation.  "
},
{
  "id": "lec-6-sec1",
  "level": "1",
  "url": "lec-6-sec1.html",
  "type": "Section",
  "number": "3.1",
  "title": "Linear Contrasts",
  "body": " Linear Contrasts  Suppose that we reject the null hypothesis of equal variances under ANOVA. This means that we believe the alternative hypothesis that at least one is different- which group means are different?   Linear Contrast   A linear combination of the population group means, that is, is called a linear contrast of if       An experiment to compare the yield of four varieties of rice was conducted.  Case 1: Assume we are interested in any difference between the means of the first and fourth varieties.  Case 2: Suppose that the fourth variety is a new type of rice and we want to know whether its mean yield is different from the average of the means for the other three varieties.  Our hypotheses in either case are versus     Case 1: With , and , the contrast  Case 2: and , so the contrast can be considered    Here are some useful formulas to construct the test statistic. When is a random sample from a population with variance , we have   \\text{Var}\\lrpar{\\sum_{i=1}^n Y_i} = \\sum_{i=1}^n \\text{Var}(Y_i) = \\sum_{i=1}^n \\sigma^2 = n\\sigma^2    \\text{Var}\\lrpar{\\sum_{i=1}^n a_iY_i} = \\sum_{i=1}^na_i^2\\text{Var}(Y_i) = \\sigma^2\\sum_{i=1}^n a_i^2    \\text{Var}(\\bar{Y}) = \\text{Var}\\lrpar{\\dfrac{1}{n}\\sum_{i=1}^n Y_i} = \\sum_{i=1}^n \\dfrac{1}{n^2}\\text{Var}(Y_i) = \\dfrac{1}{n^2}\\cdot n\\sigma^2 = \\dfrac{\\sigma^2}{n}   These formulas hold without normality as well.  Set to be the estimate of . Under the assumptions of one-way ANOVA, where (using the above formulas to simplify along the way). Without the knowledge of , can be estimated by such that The test statistic is given by under . We reject the null if .  A confidence interval for is given by   It can be shown that ; so, if we have a statistic from a t-distribution with degrees of freeom, its square is from the F-distribution with 1 and degrees of freedom. THis gives an alternative F-test statistic: under , where and is referred to as the sum of squares for the contrast such that  has one degree of freedom; we reject the null if   We may ask: why is the rejection region of the F-statistic only one-sided, even though the t-statistic is two-sided?   Recall that we test based on the t-statistic following the t-distribution, which is defined on     We reject if the t-statistic is too small or too large    If we square a significant t-statistic, we get two situations: (1), the resulting F-statistic would be large with positive sign; (2), the F-distribution then becomes defined on     As a result, we only need to consider the right-hand region on the F distribution.    A small F-statistic would correspond to a t-statistic with small absolute value , which should not lead us to reject the null. Thus, there is no need to consider the left part of the F distribution.       Researched conducted a study of biological agents to assess their effectiveness in comparison to the chemical weed agents. The study consisted of a control (no agent), two biological agents (Bio1 and Bio2) and two chemical agents (Chm1 and Chm2). Thirty 1-acre plots of land were planted with hay. Six plots were randomly assigned to receive one of the five treatments. The hay was harvested, and the total yield in tons per acre was recorded for each plot.     None (Control)  Bio1  Bio2  Chm1  Chm2     1.175  1.293  1.328  1.415  1.500     0.1204  0.1269  0.1196  0.1249  0.1265     6  6  6  6  6    We can ask these questions:   Is there a difference of effectiveness between control and the average of all agents?     Is there a difference of effectiveness between Bio1 and the average of all chemical agents?     Is there a difference of effectiveness between Bio2 and the average of all chemical agents?     Compare biological agents 1 and 2?        The one-way ANOVA table for the example looks like this.    Source  df  SS  MS  F-statistic  p-value    Treatment  4  0.3648  0.0912  5.96  0.0016    Error  25  0.3825  0.0153    Total  29  0.7473    The following table gives the necessary information (NEED TO FINISH FILLING OUT)    Contrast         1         Here, note the following for the first row :                             With , we reject since . We conclude that there is a significant difference of effectiveness between the control and average of all agents under    In the previous example, note that there would be multiple for the same comparison. For example, we can also set for . In either case, the test statistic is the same for any constant multiple of the original set of coefficients. To see this, given s, let for some . Then, we still obey the condition that so we can say that is a linear contrast. This means that the t-statistic for the contrast is given by which is the same as for the constrast    "
},
{
  "id": "linear-contrast",
  "level": "2",
  "url": "lec-6-sec1.html#linear-contrast",
  "type": "Definition",
  "number": "3.1.1",
  "title": "Linear Contrast.",
  "body": " Linear Contrast   A linear combination of the population group means, that is, is called a linear contrast of if    "
},
{
  "id": "example-4",
  "level": "2",
  "url": "lec-6-sec1.html#example-4",
  "type": "Example",
  "number": "3.1.2",
  "title": "",
  "body": "  An experiment to compare the yield of four varieties of rice was conducted.  Case 1: Assume we are interested in any difference between the means of the first and fourth varieties.  Case 2: Suppose that the fourth variety is a new type of rice and we want to know whether its mean yield is different from the average of the means for the other three varieties.  Our hypotheses in either case are versus     Case 1: With , and , the contrast  Case 2: and , so the contrast can be considered   "
},
{
  "id": "example-5",
  "level": "2",
  "url": "lec-6-sec1.html#example-5",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": "  Researched conducted a study of biological agents to assess their effectiveness in comparison to the chemical weed agents. The study consisted of a control (no agent), two biological agents (Bio1 and Bio2) and two chemical agents (Chm1 and Chm2). Thirty 1-acre plots of land were planted with hay. Six plots were randomly assigned to receive one of the five treatments. The hay was harvested, and the total yield in tons per acre was recorded for each plot.     None (Control)  Bio1  Bio2  Chm1  Chm2     1.175  1.293  1.328  1.415  1.500     0.1204  0.1269  0.1196  0.1249  0.1265     6  6  6  6  6    We can ask these questions:   Is there a difference of effectiveness between control and the average of all agents?     Is there a difference of effectiveness between Bio1 and the average of all chemical agents?     Is there a difference of effectiveness between Bio2 and the average of all chemical agents?     Compare biological agents 1 and 2?        The one-way ANOVA table for the example looks like this.    Source  df  SS  MS  F-statistic  p-value    Treatment  4  0.3648  0.0912  5.96  0.0016    Error  25  0.3825  0.0153    Total  29  0.7473    The following table gives the necessary information (NEED TO FINISH FILLING OUT)    Contrast         1         Here, note the following for the first row :                             With , we reject since . We conclude that there is a significant difference of effectiveness between the control and average of all agents under    In the previous example, note that there would be multiple for the same comparison. For example, we can also set for . In either case, the test statistic is the same for any constant multiple of the original set of coefficients. To see this, given s, let for some . Then, we still obey the condition that so we can say that is a linear contrast. This means that the t-statistic for the contrast is given by which is the same as for the constrast   "
},
{
  "id": "lec-6-sec2",
  "level": "1",
  "url": "lec-6-sec2.html",
  "type": "Section",
  "number": "3.2",
  "title": "Orthogonal Contrasts",
  "body": " Orthogonal Contrasts  We will assume the balanced case for what remains.   Orthogonal Contrast   In the balanced case ( ), two contrasts and are orthogonal if       Consider the three contrasts: Which pair is orthogonal?    The only orthogonal pair is and     A set of contrasts is said to be mutually orthogonal if all pairs of contrasts in the set are orthogonal. For a set with treatment levels, the maximum number of mutually orthogonal contrasts is .  Even though there are many different ways of making a set of orthogonal contrasts, not all will be meaningful:    Treatment  Coefficient of contrast 1  Coefficient of contrast 2    1 (Control)   0    2 (Level 1)  1     3 (Level 2)  1  1    If two contrasts are orthogonal, then one contrast conveys no information about the other contrast.  Recall that is a sum of squares associated with contrast : with a single degree of freedom. It can be shown that SSTrt from one-way ANOVA can be decomposed into independent s corresponding to each mutually orthogonal contrast. Given a set of mutually orthogonal contrasts , As shown above, we have under the null hypothesis   From the weed control example from above, we have the following contrasts:   Is there a difference of effectiveness between control and average of all agents?     Is there an average effectiveness difference between biological and chemical agents?     Compare biological agents 1-2:     Compare chemical agents 1-2:    It can be shown that all pairs of contrasts are orthogonal.  If we compute each :                      Recall the one-way ANOVA table:    Source  df  SS  MS  F-statistic  p-value    Treatment  4  0.3648  0.0912  5.96  0.0016    Error  25  0.3825  0.0153    Total  29  0.7473    The following table summarizes the result based on the specified orthogonal contrasts:    Contrast  df  Contrast SS  F-statistic     1  0.2097  13.703     1  0.1297  8.474     1  0.0037  0.240     1  0.0217  1.417    "
},
{
  "id": "definition-2",
  "level": "2",
  "url": "lec-6-sec2.html#definition-2",
  "type": "Definition",
  "number": "3.2.1",
  "title": "Orthogonal Contrast.",
  "body": " Orthogonal Contrast   In the balanced case ( ), two contrasts and are orthogonal if    "
},
{
  "id": "example-6",
  "level": "2",
  "url": "lec-6-sec2.html#example-6",
  "type": "Example",
  "number": "3.2.2",
  "title": "",
  "body": "  Consider the three contrasts: Which pair is orthogonal?    The only orthogonal pair is and    "
},
{
  "id": "p-127",
  "level": "2",
  "url": "lec-6-sec2.html#p-127",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mutually orthogonal "
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
