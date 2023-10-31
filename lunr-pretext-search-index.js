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
  "body": " Linear Contrasts  Suppose that we reject the null hypothesis of equal variances under ANOVA. This means that we believe the alternative hypothesis that at least one is different- which group means are different?   Linear Contrast   A linear combination of the population group means, that is, is called a linear contrast of if       An experiment to compare the yield of four varieties of rice was conducted.  Case 1: Assume we are interested in any difference between the means of the first and fourth varieties.  Case 2: Suppose that the fourth variety is a new type of rice and we want to know whether its mean yield is different from the average of the means for the other three varieties.  Our hypotheses in either case are versus     Case 1: With , and , the contrast  Case 2: and , so the contrast can be considered    Here are some useful formulas to construct the test statistic. When is a random sample from a population with variance , we have                 These formulas hold without normality as well.  Set to be the estimate of . Under the assumptions of one-way ANOVA, where (using the above formulas to simplify along the way). Without the knowledge of , can be estimated by such that The test statistic is given by under . We reject the null if .  A confidence interval for is given by   It can be shown that ; so, if we have a statistic from a t-distribution with degrees of freeom, its square is from the F-distribution with 1 and degrees of freedom. THis gives an alternative F-test statistic: under , where and is referred to as the sum of squares for the contrast such that  has one degree of freedom (this is the reason for the division by 1 above); we reject the null if   We may ask: why is the rejection region of the F-statistic only one-sided, even though the t-statistic is two-sided?   Recall that we test based on the t-statistic following the t-distribution, which is defined on     We reject if the t-statistic is too large in magnitude.    If we square a significant t-statistic, we get two situations: (1), the resulting F-statistic would be large with positive sign; (2), the F-distribution then becomes defined on     As a result, we only need to consider the right-hand region on the F distribution.    A small F-statistic would correspond to a t-statistic with small absolute value , which should not lead us to reject the null. Thus, there is no need to consider the left part of the F distribution.       Researchers conducted a study of biological agents to assess their effectiveness in comparison to the chemical weed agents. The study consisted of a control (no agent), two biological agents (Bio1 and Bio2) and two chemical agents (Chm1 and Chm2). Thirty 1-acre plots of land were planted with hay. Six plots were randomly assigned to receive one of the five treatments. The hay was harvested, and the total yield in tons per acre was recorded for each plot.     None (Control)  Bio1  Bio2  Chm1  Chm2     1.175  1.293  1.328  1.415  1.500     0.1204  0.1269  0.1196  0.1249  0.1265     6  6  6  6  6    We can ask these questions:   Is there a difference of effectiveness between control and the average of all agents?   NOTE: The choice of in a contrast is arbitrary; provided that , we can choose     Is there a difference of effectiveness between Bio1 and the average of all chemical agents?     Is there a difference of effectiveness between Bio2 and the average of all chemical agents?     Compare biological agents 1 and 2?        The one-way ANOVA table for the example looks like this.    Source  df  SS  MS  F-statistic  p-value    Treatment  4  0.3648  0.0912  5.96  0.0016    Error  25  0.3825  0.0153    Total  29  0.7473    The following table gives the necessary information (NEED TO FINISH FILLING OUT)    Contrast         1         2         3         4         Here, note the following for the first row :                             With , we reject since . We conclude that there is a significant difference of effectiveness between the control and average of all agents under    In the previous example, note that there would be multiple for the same comparison. For example, we can also set for . In either case, the test statistic is the same for any constant multiple of the original set of coefficients. To see this, given s, let for some . Then, we still obey the condition that so we can say that is a linear contrast. This means that the t-statistic for the contrast is given by which is the same as for the constrast    "
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
  "body": "  Researchers conducted a study of biological agents to assess their effectiveness in comparison to the chemical weed agents. The study consisted of a control (no agent), two biological agents (Bio1 and Bio2) and two chemical agents (Chm1 and Chm2). Thirty 1-acre plots of land were planted with hay. Six plots were randomly assigned to receive one of the five treatments. The hay was harvested, and the total yield in tons per acre was recorded for each plot.     None (Control)  Bio1  Bio2  Chm1  Chm2     1.175  1.293  1.328  1.415  1.500     0.1204  0.1269  0.1196  0.1249  0.1265     6  6  6  6  6    We can ask these questions:   Is there a difference of effectiveness between control and the average of all agents?   NOTE: The choice of in a contrast is arbitrary; provided that , we can choose     Is there a difference of effectiveness between Bio1 and the average of all chemical agents?     Is there a difference of effectiveness between Bio2 and the average of all chemical agents?     Compare biological agents 1 and 2?        The one-way ANOVA table for the example looks like this.    Source  df  SS  MS  F-statistic  p-value    Treatment  4  0.3648  0.0912  5.96  0.0016    Error  25  0.3825  0.0153    Total  29  0.7473    The following table gives the necessary information (NEED TO FINISH FILLING OUT)    Contrast         1         2         3         4         Here, note the following for the first row :                             With , we reject since . We conclude that there is a significant difference of effectiveness between the control and average of all agents under    In the previous example, note that there would be multiple for the same comparison. For example, we can also set for . In either case, the test statistic is the same for any constant multiple of the original set of coefficients. To see this, given s, let for some . Then, we still obey the condition that so we can say that is a linear contrast. This means that the t-statistic for the contrast is given by which is the same as for the constrast   "
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
  "id": "p-128",
  "level": "2",
  "url": "lec-6-sec2.html#p-128",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mutually orthogonal "
},
{
  "id": "lec-8-sec1",
  "level": "1",
  "url": "lec-8-sec1.html",
  "type": "Section",
  "number": "4.1",
  "title": "Simultaneous Contrasts",
  "body": " Simultaneous Contrasts  Reconsider the example on weed control from the previous lecture:  Researchers conducted a study of biological agents to assess their effectiveness in comparison to the chemical weed agents. The study consisted of a control (no agent), two biological agents (Bio1 and Bio2) and two chemical agents (Chm1 and Chm2). Thirty 1-acre plots of land were planted with hay. Six plots were randomly assigned to receive one of the five treatments. The hay was harvested, and the total yield in tons per acre was recorded for each plot.     None (Control)  Bio1  Bio2  Chm1  Chm2     1.175  1.293  1.328  1.415  1.500     0.1204  0.1269  0.1196  0.1249  0.1265     6  6  6  6  6    We have five treatment levels: control, biological agents 1 and 2, and chemical agents 1 and 2. We can ask the question: are all biological and chemical agents similarly effective? This translates to versus Our goal will be to write a null hypothesis of equations with contrasts such that when all such equations are simultaneously true, the null is also true.  Consider the mutually orthogonal contrasts below: The above contrasts are simultaneous contrasts (which also happen to be mutually orthogonal). When all such contrasts are 0, it follows that for appropriate in the null hypothesis considered.  To test , we develop a test statistic. Consider Set Then, we have due to the mutual orthogonality of the contrasts in .  The degrees of freedom for , denoted , is the minimum number of contrasts required to express the simultaneous equality of means. In the weed control example, ; in general, we have where comes from one-way ANOVA. In this situation, we reject if   In the weed example, we can compute: This means that which is compared to under . Since , we reject . Thus, under , there is evidence that at least one average effect on weed control is different among the four agents.  If we ignore the control group and run ANOVA on the four treatment levels, we have . The ANOVA table would be given by    Source  df  SS  MS  F-statistic    Trt  3  SSTrt*  MSTrt*  F = MSTrt*\/MSE*    Error  20  SSE*  MSE*    Total  23    It is true that ; why don't we use this result to test the new ? The answer is in the degrees of freedom for the error. For the simultaneous contrasts, we have 25 degrees of freedom, while there are only 20 in the ANOVA with 4 treatment levels.  If we have treatments and are interested in , we can develop the mutually orthogonal contrasts The test statistic for can be given by under , where MSE comes from one-way ANOVA. We still reject if .  "
},
{
  "id": "p-146",
  "level": "2",
  "url": "lec-8-sec1.html#p-146",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simultaneous contrasts "
},
{
  "id": "lec-8-sec2",
  "level": "1",
  "url": "lec-8-sec2.html",
  "type": "Section",
  "number": "4.2",
  "title": "Trend Analysis",
  "body": " Trend Analysis  We have an ANOVA setup: values of a quantitative variable as treatment levels. For example, the effect of varying doses of a drug on patients, the effect on yield due to increased amounts of fertilizer, etc. After testing , it would be our interest to examine whether a trend exists in the response variable over the varying levels of the quantitative factor.  The typical trends seen here are polynomial; so, we use a set of orthogonal contrasts called orthgonal polynomial contrasts to test the existence of such a trend. We assume the balanced case and that treatment levels are equally spaced.  When , the only possible trend is linear. Testing (see below) can be useful to determine whether there exists an evidence of linear trend. If we reject , there is evidence of linear trend of response over the treatment levels.   When , there are two possible trends: linear and quadratic. For some constants , we have the following equation:    Consider each contrast corresponding to each trend sequentially:   We consider to determine if     We consider to see if .     In (1), if we fail to reject , there is no significant evidence of linear trend; if we reject, then a significant evidence of linear trend. In (2), if we fail to reject , then there is no significant evidence of quadratic trend; thus, we conclude that only linear trend would exist. If we reject , this indicates that a quadratic trend would exist.  We can generalize the trend analysis for as well. To set up the contrasts for trend analysis, we can use a table for coefficients. In general, if there are treatment levels, then a polynomial with degree at most can be considered. Lower-degree curves are easy to interpret but may not be a good fit; higher-degree curves are more complicated, but often provide good fit.  We investigate any existence of trends only if we reject , which implies that . For , given orthogonal polynomial contrasts we have If there is significant evidence of linear trend, takes a large proportion of compared to ; for a quadratic trend, the reverse is true.  For , given orthogonal polynomial contrasts , we have It is often the case that the first few dominate while the other are small; thus, it leads us to reject for the first few values of (which means there is significant evidence of trend corresponding to contrast).  The last few are not large enough for to be rejected means that there is insignificant evidence of trend corresponding to contrast. We often call the sum of the last few the SS for lack of fit.    To determine whether the sales of apples can be enhanced by increasing the size of hte apple display in supermarkets, 20 large supermarkets are randomly selected from those in a large city. Four stores are randomly assigned to have either 10, 15, 20, 25, or 30 square feet for display of apples. Sales of apples per customer for a selected week is the response variable below.    Space  10 sq. ft.  15 sq. ft.  20 sq. ft.  25 sq. ft.  30 sq. ft.     0.778  0.665  0.973  1.003  1.125     0.458  0.830  1.029  1.073  1.184     0.638  0.716  1.106  0.979  9.904     0.602  0.877  0.964  0.981  0.951    Mean  0.618  0.772  1.018  1.009  1.041    Which trend would be appropriate?    We arrive at the following ANOVA table:    Source  df  SS  MS  F    Space  4  0.5628  0.1407  13.72    Error  15  0.1538  0.0103    Total  19  0.7166    Note that we reject for since . This means that we can begin the trend analysis.  First, we set up the appropriate contrasts for each trend: by using the orthogonal polynomials table. Note that we disregard cubic and quartic contrasts; this is due to the small value of their corresponding (see below). Second, we compute each .   Third, we have additional rows of SS corresponding to each trend:    Source  df  SS  MS  F    Space  4  0.5628  0.1407  13.72    Linear  1  0.4674  0.4674  45.58    Quadratic  1  0.0706  0.0706  6.88    Lack of fit  2  0.0248  0.0248  1.20    Error  15  0.1538  0.0103    Total  19  0.7166    As mentioned earlier, we disregard cubic and quartic trends; note that since results in , if we conduct a hypothesis test for , we would fail to reject the null because .  Under , we reject both and as . This means that both linear and quadratic trends are significant. See the plot below.     "
},
{
  "id": "p-154",
  "level": "2",
  "url": "lec-8-sec2.html#p-154",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthgonal polynomial contrasts "
},
{
  "id": "example-7",
  "level": "2",
  "url": "lec-8-sec2.html#example-7",
  "type": "Example",
  "number": "4.2.1",
  "title": "",
  "body": "  To determine whether the sales of apples can be enhanced by increasing the size of hte apple display in supermarkets, 20 large supermarkets are randomly selected from those in a large city. Four stores are randomly assigned to have either 10, 15, 20, 25, or 30 square feet for display of apples. Sales of apples per customer for a selected week is the response variable below.    Space  10 sq. ft.  15 sq. ft.  20 sq. ft.  25 sq. ft.  30 sq. ft.     0.778  0.665  0.973  1.003  1.125     0.458  0.830  1.029  1.073  1.184     0.638  0.716  1.106  0.979  9.904     0.602  0.877  0.964  0.981  0.951    Mean  0.618  0.772  1.018  1.009  1.041    Which trend would be appropriate?    We arrive at the following ANOVA table:    Source  df  SS  MS  F    Space  4  0.5628  0.1407  13.72    Error  15  0.1538  0.0103    Total  19  0.7166    Note that we reject for since . This means that we can begin the trend analysis.  First, we set up the appropriate contrasts for each trend: by using the orthogonal polynomials table. Note that we disregard cubic and quartic contrasts; this is due to the small value of their corresponding (see below). Second, we compute each .   Third, we have additional rows of SS corresponding to each trend:    Source  df  SS  MS  F    Space  4  0.5628  0.1407  13.72    Linear  1  0.4674  0.4674  45.58    Quadratic  1  0.0706  0.0706  6.88    Lack of fit  2  0.0248  0.0248  1.20    Error  15  0.1538  0.0103    Total  19  0.7166    As mentioned earlier, we disregard cubic and quartic trends; note that since results in , if we conduct a hypothesis test for , we would fail to reject the null because .  Under , we reject both and as . This means that both linear and quadratic trends are significant. See the plot below.    "
},
{
  "id": "lec-9-sec1",
  "level": "1",
  "url": "lec-9-sec1.html",
  "type": "Section",
  "number": "5.1",
  "title": "Multiple Comparisons",
  "body": " Multiple Comparisons  Recall the motivation for one-way ANOVA: we seek to test the hypothesis for an experiment with treatments. But why not apply a two-sample -test for each pair?  Recall that when we declare a signficance level , we declare the probability of making a type I error (rejecting the null when we should not). At the signficance level , we have when we independently test hypotheses. Note that we call the term the family-wise or experiment-wise error rate . So for example, if and , the family-wise error rate is given by   In one-way ANOVA, if we reject , it is natural to investigate which 's are different. We can test all possible pairwaise contrasts , so that the type I error is better controlled. This gives, for example,      FWER with  FWER with    3  3  0.14  0.03    4  6  0.26  0.06    5  10  0.40  0.09    6  15  0.54  0.14    where is the number of possible pairwise contrasts, and FWER is the family-wise error rate.  "
},
{
  "id": "p-173",
  "level": "2",
  "url": "lec-9-sec1.html#p-173",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "family-wise or experiment-wise error rate "
},
{
  "id": "lec-9-sec2",
  "level": "1",
  "url": "lec-9-sec2.html",
  "type": "Section",
  "number": "5.2",
  "title": "Fisher’s LSD",
  "body": " Fisher's LSD  Suppose that we want to test vs. Our test statistic is given by under . This gives a rejection region , which is equivalent to here, we call the term the least significant difference (LSD) .  For a confidence interval for , we have so that in the balanced case, we have In general, the LSD makes pairwise comparison and is recommended to use when one-way ANOVA gives a significant result; it does not control FWER .    Six population means were tested by one-way ANOVA, which indicates there is at least one different mean. Using , , and for all , make all pairwise comparisons using Fisher's LSD.    Group  1  2  3  4  5  6    Sample Mean  505  528  564  498  600  470      First, compute the LSD: Second, sort the sample means from each group in increasing order:    Group  6  4  1  2  3  5    Sample Mean  470  498  505  528  564  600    Compare the smallest to the largest, second largest, etc. until we find a non-significant pair: Continue with Group 4, Group 1 and Group 2:      Now, identify groups without significant difference:   Groups 6,4,1,2 do not differ    Groups 1,2,3 do not differ    Groups 3,5 do not differ   This gives the following table:    Group  6  4  1  2  3  5    Sample Mean          The sample means with a common superscript do not significantly differ under .    "
},
{
  "id": "p-176",
  "level": "2",
  "url": "lec-9-sec2.html#p-176",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "least significant difference (LSD) "
},
{
  "id": "example-8",
  "level": "2",
  "url": "lec-9-sec2.html#example-8",
  "type": "Example",
  "number": "5.2.1",
  "title": "",
  "body": "  Six population means were tested by one-way ANOVA, which indicates there is at least one different mean. Using , , and for all , make all pairwise comparisons using Fisher's LSD.    Group  1  2  3  4  5  6    Sample Mean  505  528  564  498  600  470      First, compute the LSD: Second, sort the sample means from each group in increasing order:    Group  6  4  1  2  3  5    Sample Mean  470  498  505  528  564  600    Compare the smallest to the largest, second largest, etc. until we find a non-significant pair: Continue with Group 4, Group 1 and Group 2:      Now, identify groups without significant difference:   Groups 6,4,1,2 do not differ    Groups 1,2,3 do not differ    Groups 3,5 do not differ   This gives the following table:    Group  6  4  1  2  3  5    Sample Mean          The sample means with a common superscript do not significantly differ under .   "
},
{
  "id": "lec-9-sec3",
  "level": "1",
  "url": "lec-9-sec3.html",
  "type": "Section",
  "number": "5.3",
  "title": "Tukey’s HSD",
  "body": " Tukey's HSD  This assumes the balanced case, i.e. . We replace the LSD term with where is a critical value found in a Tukey's HSD table. The term is called Tukey's Honest Significant Difference (HSD) . We reject the hypothesis if . The Tukey C.I. for is given by Tukey's method provides a valid type I error control.    Consider the example from above:  Six population means were tested by one-way ANOVA, which indicates there is at least one different mean. Using , , and for all , make all pairwise comparisons using Fisher's LSD.    Group  1  2  3  4  5  6    Sample Mean  505  528  564  498  600  470      The solution method for Tukey's HSD is identical to Fisher's LSD; the difference is that we are comparing against HSD rather than LSD in the pairwise comparison. We get    Group  6  4  1  2  3  5    Sample Mean            Note that because , Tukey's method results in less reject.  "
},
{
  "id": "p-186",
  "level": "2",
  "url": "lec-9-sec3.html#p-186",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Tukey's Honest Significant Difference (HSD) "
},
{
  "id": "example-9",
  "level": "2",
  "url": "lec-9-sec3.html#example-9",
  "type": "Example",
  "number": "5.3.1",
  "title": "",
  "body": "  Consider the example from above:  Six population means were tested by one-way ANOVA, which indicates there is at least one different mean. Using , , and for all , make all pairwise comparisons using Fisher's LSD.    Group  1  2  3  4  5  6    Sample Mean  505  528  564  498  600  470      The solution method for Tukey's HSD is identical to Fisher's LSD; the difference is that we are comparing against HSD rather than LSD in the pairwise comparison. We get    Group  6  4  1  2  3  5    Sample Mean           "
},
{
  "id": "lec-9-sec4",
  "level": "1",
  "url": "lec-9-sec4.html",
  "type": "Section",
  "number": "5.4",
  "title": "Scheff’s Method",
  "body": " Scheff's Method  Scheff's method controls FWER and can be applied to all types of contrasts. In particular, it's useful if many contrasts are to be examined.  The method is considered conservative, since large differences are required for significance; consider a contrast We calculate the Scheff value such that So that for the null , we reject if . We get a C.I. for with     Consider the example from above:  Six population means were tested by one-way ANOVA, which indicates there is at least one different mean. Using , , and for all , make all pairwise comparisons using Fisher's LSD.    Group  1  2  3  4  5  6    Sample Mean  505  528  564  498  600  470      Pairwise comparison is computed as with Fisher's LSD and Tukey's HSD, but using The resulting pairwise comparison from Scheff's method is    Group  6  4  1  2  3  5    Sample Mean            Since , Scheff's method leads to less rejection than Tukey's HSD (and so less rejection than Fisher's LSD).  This method can be used for a general contrast; suppose we want to test under . We have  We fail to reject , which implies that the mean of Group 1 is not significantly different from that of Groups 5 and 6. The 95% C.I. is The fact that 0 is included in the C.I. implies that there is no significant difference.  "
},
{
  "id": "example-10",
  "level": "2",
  "url": "lec-9-sec4.html#example-10",
  "type": "Example",
  "number": "5.4.1",
  "title": "",
  "body": "  Consider the example from above:  Six population means were tested by one-way ANOVA, which indicates there is at least one different mean. Using , , and for all , make all pairwise comparisons using Fisher's LSD.    Group  1  2  3  4  5  6    Sample Mean  505  528  564  498  600  470      Pairwise comparison is computed as with Fisher's LSD and Tukey's HSD, but using The resulting pairwise comparison from Scheff's method is    Group  6  4  1  2  3  5    Sample Mean           "
},
{
  "id": "lec-9-sec5",
  "level": "1",
  "url": "lec-9-sec5.html",
  "type": "Section",
  "number": "5.5",
  "title": "Summary",
  "body": " Summary     Fisher's LSD: For pairwise contrasts, no control over FWER    Tukey's HSD: For pairwise contrasts, controls FWER    Scheff's method: For any contrasts, controls FWER     "
},
{
  "id": "lec-13-sec-1",
  "level": "1",
  "url": "lec-13-sec-1.html",
  "type": "Section",
  "number": "6.1",
  "title": "Factorial Experiments",
  "body": " Factorial Experiments  In one-way ANOVA, we consider a single factor\/treatment with levels on the response of our interest. In practice, though, there must be more than one single treatment. For example, we can compare gas mileage (mpg) for car models and gasoline additives; or, we can observe the effect of two major fertilizer ingredients (nitrogen and phosphorus) on crop yield.  A factorial treatment structure is an experiment where the response is observed for all combinations of each factor. A two-way factorial experiment is one in which we examine all combinations of the levels of two treatments: with levels, and with levels. This creates a factorial structure with treatment combinations.  As a matter of notation, we use the notation to denote the th replicate of treatment and . We can extend the notation:                      This table gives a factorial design with for   "
},
{
  "id": "p-203",
  "level": "2",
  "url": "lec-13-sec-1.html#p-203",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "factorial treatment structure "
},
{
  "id": "lec-13-sec-2",
  "level": "1",
  "url": "lec-13-sec-2.html",
  "type": "Section",
  "number": "6.2",
  "title": "Simple Effects and Main Effects",
  "body": " Simple Effects and Main Effects  We are interested in whether any difference of average response is significant due to the treatment structure. A simple effect (SE) of treatment is the difference between mean responses at two levels of at a given level of treatment .  Consider the example where we compare the mean yield for two levels of nitrogen (N) and phosphorous (P):                   The estimated SE of nitrogen at is given by And similarly, the estimated SE of nitrogen at is given by   A main effect is the effect of each individual treatment\/factor on the response. For example, the main effect of treatment is the average of simple effects of . In the nitrogen\/phosphorous example, the estimated main effect of nitrogen is given by Here, the main effects are the differences in the mean response of a factor over all other levels of a factor.  For the same example, if we have the following information      On the left, we see that and , which gives the main effects of both nitrogen and phosphorous.  On the right, we see and , so conclude there is no main effect of nitrogen.  "
},
{
  "id": "p-206",
  "level": "2",
  "url": "lec-13-sec-2.html#p-206",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simple effect "
},
{
  "id": "p-209",
  "level": "2",
  "url": "lec-13-sec-2.html#p-209",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "main effect "
},
{
  "id": "lec13-sec-3",
  "level": "1",
  "url": "lec13-sec-3.html",
  "type": "Section",
  "number": "6.3",
  "title": "Interaction",
  "body": " Interaction  Suppose we have a different data set so that the figure is given by   From this, we see that the effect of nitrogen is different for and . We say that interaction occurs when two factors and have a nonconstant differences in mean response levels across treatments.  As an example, compare the gas mileage for 3 car models and two gasoline additives:                      The figure below shows the sample mean of each combination.   From the figure, we see that additive 1 is best for the first and third cars, while additive 2 is better for the second car. The sample mean difference of Additives 1 and 2 change for each car; this means that there is interaction between car models and gasoline additives.  "
},
{
  "id": "p-214",
  "level": "2",
  "url": "lec13-sec-3.html#p-214",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "interaction "
},
{
  "id": "lec13-sec-4",
  "level": "1",
  "url": "lec13-sec-4.html",
  "type": "Section",
  "number": "6.4",
  "title": "Models for Factorial Experiments and Connections to ANOVA",
  "body": " Models for Factorial Experiments and Connections to ANOVA  A completely randomized design with factorial treatment structure can be described in terms of a statistical model as follows: where    is the k-th observation at      is the average of the population with      is the overall population mean     is the average of the population with      is the average of the population with      is the interaction between two populations with      is a random error     Reconsider the car\/gasoline example as a one-way treatment structure with six levels (three car models and two additives); the data is reproduced below:                      We have the one-way ANOVA table:    Source  df  SS  MS  F     Trt  5  107.6667  21.5333  10.7  0.0059    Error  6  12.0000  2.0    Total  11  119.6667    From this, we can test against for at least one pair . Under , we conclude that there is a significant difference in average of mpg among the six treatment combinations.  So, we construct five meaningful, mutually orthogonal contrasts as follows:              1  1  1  0  0       2  1  1         3  1   1        4  1   0  0       5  1          The description of the contrasts are given:   Contrast 1: Difference in average mpg between Car 1 and Car 3    Contrast 2: Difference between average mpg of Cars 1 & 3 and that of Car 2    Contrast 3: Difference in average mpg between Additive 1 and Additive 2    Contrast 4: Difference in average mpg between Car 1 and Car 3 for each additive    Contrast 5: Difference between average mpg of Cars 1 & 3 and that of Car 2 for each Additive.   Contrasts 1 and 2 give a model of car effect; contrast 3 gives an effect of additive; contrasts 3 and 4 give interaction between car and additive.  The following table shows the corresponding , and -statistic values:    Contrast                               Note that . The SS due to the model of car ( )is 95.16667 with , the SS due to gasoline additive ( ) is 0.333 with , and the SS due to interaction ( ) is 12.16667 with   The decomposition of SSTrt via each contrast gives the following table:    Source  df  SS  MS  F     Car  2  95.1667  47.83335  23.7917  0.0014    Additive  1  0.3333  0.3333  0.1665  0.6973    Interaction  2  12.1667  6.08335  3.0417  0.1224    Error  6  12.0000  2.0    Total  11  1119.6667    We conclude that there is no significant interaction between model of car and gasoline additive under , and the effect of gasoline additive is not significant under the same significance. However, we do conclude that the effect of the car model is significant.  For a CRD of factorial treatment structure with the same number of replicates , the source of variation can be decomposed as follows:    Source  df  SS  MS  F    A  a-1  SSA  MSA = SSA\/(a-1)  MSA\/MSE    B  b-1  SSB  MSB = SSB\/(b-1)  MSB\/MSE    AB  (a-1)(b-1)  SS(AB)  MSA = SS(AB)\/((a-1)(b-1))  MS(AB)\/MSE    Error  ab(n-1)  SSE  MSE = SSE\/(ab(n-1))    Total  abn-1  SSTotal    When conducting experiments using ANOVA for factorial experiments, we have the following options:    Means Model  Effects Model  Test Statistic         at least one is distinct  at least one is distinct  Reject if         at least one is distinct  at least one is distinct  Reject if         for at least one  at least one is nonzero  Reject if    Here, and   When conducting these tests, we should first conduct a test for interaction between two factors. If significant interaction exists, the tests for main effects must be interpreted carefully. This is because the main effects of some treatments are no longer constant for the levels of another treatment under significant interaction between A and B. Thus, under significant interaction, the means of treatment A need to be compared for each level of treatment B.  In the absence of significant interaction, the test for main effects can be interpreted separately.  Ultimately, this gives some steps, given a 2-way ANOVA table:   Check the F-statistic for interaction    If the resulting interaction is significant, then compare the average case-by-case; make a comparison for each group. For example, in the car-gas additive example, if there is significant interaction, we will need to compare the means:     If there is not significant interaction, we can make an interpretation from the first two rows of the table (the treatment rows) for main effect.     "
},
{
  "id": "lec-15-sec-1",
  "level": "1",
  "url": "lec-15-sec-1.html",
  "type": "Section",
  "number": "7.1",
  "title": "Contrasts and Comparisons in Factorial Experiments",
  "body": " Contrasts and Comparisons in Factorial Experiments   Notations  An factorial design under for all :    estimates and      estimates and      estimates and        Contrasts with Significant Interaction  When the interaction is significant, compare means among each treatment combination for main effects. So, with consider vs.  estimates and its standard error estimates : We have two test statistics: which indicates that we reject if , and which indicates that we reject if     Pairwise Comparison Interaction  For Fisher's LSD with , we set If then the two treatment combinations and have significantly different averages.  For Tukey's HSD with , we set If then the two treatment combinations and have significantly different averages.  For Scheffe's method for , set We reject the null if   When there is not significant interaction, main effects can be calculated by averaging over the other treatments.    Treatment with levels  Treatment with levels                              Examples    A marketing company investigates the factors that may influence the length of time a commercial can hold a child’s attention. A preliminary study reveals that the age of the child and the type of advertised product may be significant factors. A group of 20 children is recruited in each age group, and 10 are randomly assigned to watch a 60-second commercial for each of the two products (Breakfast cereals and Video games). Researchers record their attention spans during the viewing of the commercial. The two-way ANOVA table is shown as follows:    Source  df  SS  MS  value     Age  2  1303.0  651.5  4.43  0.017    Product  1  2018.4  2018.4  13.72  0.001    Interaction  2  1384.3  692.1  4.79  0.013    Error  54  7994.0  147.1    Total  59  12649.7    Note that the interaction is significant under .  The sample means are given below:     1  2  3    1       2       The firm wants to determine whether there were large differences in the mean length of time that the commercial is able to hold the child's attention depending on these two factors.     Question 1: Use Tukey's method to identify significant differences in the mean attenion spans of the three age groups of children    Use Tukey's method to identify significant differences in the mean attention spans for the types of products.       Due to the presence of significant action, we need to investigate the main effects of age for each product separately.   Fix the first product . Then, consider the following pairwise comparisons for the main effect of age:     Compare Tukey's HSD with each pairwise mean difference. and     We conclude that there is no main effect of age for the first product (breakfast cereals).   Now repeat the process with the second product .   Consider the pairwise comparisons for the main effect of age:     Compare Tukey's HSD with each pairwise mean difference. and as before    We conclude that there is a significant difference between the first and third age groups for the second product (video games).     For the second question, due to the presence of significant interaction, we need to investigate the main effects of the product types for each age group separately.   Fix the first age group . Consider the comparison          We conclude there is no significant difference between the two products for the first age group.    Homework : repeat for the second and third age groups.      An experiment studies the effects of four different pesticides on the yield of fruit from three different varieties of a citrus tree.    Source  df  SS  MS  value     Pesticide  3  2226.290  742.10  17.51  0.0001    Variety  2  3996.08  1998.04  47.13  0.00001    Interaction  6  456.92  76.15  1.80  0.1818    Error  12  508.67  42.39    Total  23  7187.96    There is no significant interaction; we interpret the main effects from the ANOVA table. We also reject the null hypotheses and We want to know which pairwise mean difference or contrast is significantly different from 0. This gives three questions:   Let , , , and . Using Tukey's HSD with , identify which pair(s) of pesticides have significantly different average effect on yield.    Given that , , and , identify which pair(s) of varieties have significantly different average effect on yield using Tukey's HSD with     Under , test the following two null hypotheses using Scheffe's Method: and        First we compute Then, compare each pairwise diffence of the pesticides to HSD: So we conclude that    Pesticide  3  1  2  4    Sample Mean        Question 2 is left as homework  Compute: and Now, calculate each and compare with . So . Similarly, So . We have two conclusions:   We fail to reject , which implies that there is no significant difference between the average yield over the 1st and 2nd pesticides and the average yield over the 3rd and 4th pesticides.  We reject , which implies that the average yield of the 2nd variety is significantly different from the average yield of the 1st and 3rd varieties.        "
},
{
  "id": "example-11",
  "level": "2",
  "url": "lec-15-sec-1.html#example-11",
  "type": "Example",
  "number": "7.1.1",
  "title": "",
  "body": "  A marketing company investigates the factors that may influence the length of time a commercial can hold a child’s attention. A preliminary study reveals that the age of the child and the type of advertised product may be significant factors. A group of 20 children is recruited in each age group, and 10 are randomly assigned to watch a 60-second commercial for each of the two products (Breakfast cereals and Video games). Researchers record their attention spans during the viewing of the commercial. The two-way ANOVA table is shown as follows:    Source  df  SS  MS  value     Age  2  1303.0  651.5  4.43  0.017    Product  1  2018.4  2018.4  13.72  0.001    Interaction  2  1384.3  692.1  4.79  0.013    Error  54  7994.0  147.1    Total  59  12649.7    Note that the interaction is significant under .  The sample means are given below:     1  2  3    1       2       The firm wants to determine whether there were large differences in the mean length of time that the commercial is able to hold the child's attention depending on these two factors.     Question 1: Use Tukey's method to identify significant differences in the mean attenion spans of the three age groups of children    Use Tukey's method to identify significant differences in the mean attention spans for the types of products.       Due to the presence of significant action, we need to investigate the main effects of age for each product separately.   Fix the first product . Then, consider the following pairwise comparisons for the main effect of age:     Compare Tukey's HSD with each pairwise mean difference. and     We conclude that there is no main effect of age for the first product (breakfast cereals).   Now repeat the process with the second product .   Consider the pairwise comparisons for the main effect of age:     Compare Tukey's HSD with each pairwise mean difference. and as before    We conclude that there is a significant difference between the first and third age groups for the second product (video games).     For the second question, due to the presence of significant interaction, we need to investigate the main effects of the product types for each age group separately.   Fix the first age group . Consider the comparison          We conclude there is no significant difference between the two products for the first age group.    Homework : repeat for the second and third age groups.   "
},
{
  "id": "example-12",
  "level": "2",
  "url": "lec-15-sec-1.html#example-12",
  "type": "Example",
  "number": "7.1.2",
  "title": "",
  "body": "  An experiment studies the effects of four different pesticides on the yield of fruit from three different varieties of a citrus tree.    Source  df  SS  MS  value     Pesticide  3  2226.290  742.10  17.51  0.0001    Variety  2  3996.08  1998.04  47.13  0.00001    Interaction  6  456.92  76.15  1.80  0.1818    Error  12  508.67  42.39    Total  23  7187.96    There is no significant interaction; we interpret the main effects from the ANOVA table. We also reject the null hypotheses and We want to know which pairwise mean difference or contrast is significantly different from 0. This gives three questions:   Let , , , and . Using Tukey's HSD with , identify which pair(s) of pesticides have significantly different average effect on yield.    Given that , , and , identify which pair(s) of varieties have significantly different average effect on yield using Tukey's HSD with     Under , test the following two null hypotheses using Scheffe's Method: and        First we compute Then, compare each pairwise diffence of the pesticides to HSD: So we conclude that    Pesticide  3  1  2  4    Sample Mean        Question 2 is left as homework  Compute: and Now, calculate each and compare with . So . Similarly, So . We have two conclusions:   We fail to reject , which implies that there is no significant difference between the average yield over the 1st and 2nd pesticides and the average yield over the 3rd and 4th pesticides.  We reject , which implies that the average yield of the 2nd variety is significantly different from the average yield of the 1st and 3rd varieties.      "
},
{
  "id": "lec15-sec2",
  "level": "1",
  "url": "lec15-sec2.html",
  "type": "Section",
  "number": "7.2",
  "title": "Interaction Plots",
  "body": " Interaction Plots  Interaction plots are a diagnostic tool used to assess interaction between treatments. We plot the mean of response by the levels of one treatment; each level of the other treatments is represented by a different line. This will illustrate the consistency (or lack thereof) of the main effects.  The plot below shows the interaction plot from Example 2:   If we have a factorial structure, we have two cases. In case one, there is no interaction, i.e. . In this case, estimates . In the image below, the left shows no main effect of A, while the right indicates a main effect of A.   Recall the car model and gasoline additive example:   We saw no significant interaction, and that the average mpg between Car1 and Car2 is not significantly different for each additive, i.e. as well as the average mpg between Additive1 and Additive2 is not significantly different for each Car: .  In case two, we have a nontrivial interaction, i.e. :   The main effects differ depending on the other treatment.  "
},
{
  "id": "lec-16-sec-1",
  "level": "1",
  "url": "lec-16-sec-1.html",
  "type": "Section",
  "number": "8.1",
  "title": "Three-Way Factorial Experiment",
  "body": " Three-Way Factorial Experiment   Three-Way Factorial Experiment  A two-way factorial design looks at all combinations of two factors A and B; we can extend to three factors. Consider an experiment with three treatments: A with levels, B with levels, and C with levels. This gives a factorial structure with treatment combinations.  We have the notation to notate the th replicates with treatments :                                Models for Three-Way Factorial Experiments  A completely randomized design with factorial treatment structure can be described by the means model where is random error and is the population mean with , or the effects model We have the main effects , two-way interactions , and three-way interaction     ANOVA for Factorial Experiments  For a CRD with factorial treatment structure with the same number of replicates , the source of variation can be decomposed as    Source  df                                Error     Total     The SS corresponding to each source and the statistics can be similarly defined.    Interaction  A two-way interaction can be interpreted in the same manner as before. The presence of an AC interaction means that the mean responses among the levels of factor A are different across the levels of factor C.  In order to interpret a three-way interaction, we need to consider that the differences in mean responses for levels of factor C change across combinations of levels for factors A and B. The pattern in the interactions between factors A and B changes across the levels of factor C.  Under the presence of a three-way interaction, we plot a separate profile plot for the two-way interaction at each level of the other factor to check different patterns in several of the profile plots. If the three-way interaction is significant, then comparisons among each treatment combination of A, B, and C must be made for main effects. If the three-way interaction is not significant, but at least one of the two-way interactions is, then comparisons among the involved treatment combinations must be made for main effects. If both two-way and three-way interactions are insignificant, then the output from the ANOVA table can be directly interpreted for main effects.    Examples  Need to include examples   "
},
{
  "id": "lec-17-sec-1",
  "level": "1",
  "url": "lec-17-sec-1.html",
  "type": "Section",
  "number": "9.1",
  "title": "Introduction to Fixed and Random Effects",
  "body": " Introduction to Fixed and Random Effects   Fixed Effects Model  Consider a one-way treatment structure with levels in a CRD. Then we have the fixed effects model where and , is the th observation in treatment level , is the overall mean (a fixed constant), is the the level effect (a fixed constant), and is random error associated with such that . Note that there are only levels about which we are making inferences.  Under the fixed effects model, we have the following:            for due to the assumption on random error.  Recall that and note that its expectation can be written as We can define the forresponding expected mean square (EMS) such that which gives the table    Source  df  EMS    Trt      Error      Total     Recall that, for the average difference among treatment levels, we test the hypothesis against at least one is non-zero. Under , the EMS for the treatment should be the same with that for error; under , the EMS for treatment should be larger than that for error. This means that for the test statistic under , an F-value closer to 1 indicates greater likelihood that we fail to reject .   "
},
{
  "id": "lec-17-sec-2",
  "level": "1",
  "url": "lec-17-sec-2.html",
  "type": "Section",
  "number": "9.2",
  "title": "Random Effects Model",
  "body": " Random Effects Model  Up to now, we've looked at a study or experiment involving factors having a predetermined set of levels. For a fixed effects model, the inferences are only for the levels of the factors actually used in the experiment; consider the example where we want to compare the intensities of the electrostatic discharges of lightning at three different tracking stations within a 20-mile radius of the central computing facilities of a university. Suppose that we want to make an inference for all possible tracking stations. Instead of being concerned about only these three tracking stations, we can consider these stations as a random sample of three taken from the many possible locations for tracking stations.  This means that our goal becomes to identify factors that are sources of variability in the response variable instead of estimating some fixed effects. For example, we can consider what happens when the quality control engineer attempts to determine which factors in the production process are the major sources of variability (worker ability, types of machines, etc.). Rather than treating those factors as fixed, we can consider them as random. So, we need to estimate the contribution of each of these soruces of variability (called variance components , see below) to the overall variability in the product's quality (response).  For a random effects model, we consider a one-way treatment structure in a CRD with treatment levels corresponding to the random sample of population of possible levels. This gives the model where is the th observation in treatment level , is the overall mean (a fixed constant), is the th treatment level effect (random such that )), and is random error associated with such that . We wish to make inferences about all possible levels in the population. This gives the following table.    Source  df  EMS    Trt      Error      Total     For the random effects model, we are testing versus Under , all values are 0 because . The test statistic for the test above is given by under . If we reject , we are interested in estimating   We have some terms and values:    and are called variance components      is the estimate of     MSTrt is a point estimate of , which we term EMS         Solving for , we get . This is called the Method of Moments Estimation (MME) of . Note that MME can yield negative variance estimates.   We can use specific techniques to avoid the negative variance component estimates; in SAS, PROC MIXED or ( PROC GLIMMIX ) statement allows us to use the method called Restriced Maximum Likelihood (REML) for that.  "
},
{
  "id": "p-308",
  "level": "2",
  "url": "lec-17-sec-2.html#p-308",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "variance components "
},
{
  "id": "p-311",
  "level": "2",
  "url": "lec-17-sec-2.html#p-311",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "variance components "
},
{
  "id": "lec-17-sec-3",
  "level": "1",
  "url": "lec-17-sec-3.html",
  "type": "Section",
  "number": "9.3",
  "title": "Examples",
  "body": " Examples  To investigate the effect that teachers had on the variation in students' grades, a large school district desgined an experiment in which four teachers were randomly selected from the population of teachers in the district. Seven students were randomly assigned to each of the four teachers, and their final score was recorded at the end of the year.    Teacher  Score    A  84  90  76  62  72  81  70    B  75  85  91  98  82  75  74    C  72  76  74  85  77  60  62    D  88  98  70  95  86  80  75    First, write an appropriate statistical model. Because the four teachers were selected at random, we can use a single-factor random-effects model such that where , . Thus, we have    Source  df  SS  MS   EMS    Treatment  3  683.3  227.8  2.57     Error  24  2119.7  88.3      Total  27  2803.0    Now, write the hypothesis for the ANOVA output and make a conclusion under : versus Since , which leads us to fail to reject . Thus, there is no significant evidence to indicate that there is an additional variability in students' scores from teacher to teacher.  Finally, estimate the variance components by MME; here, we calculate the estimates for illustration even though we fail to reject . We know that the MME of and satisfy the following equations: which implies that and   "
},
{
  "id": "lec-18-sec-1",
  "level": "1",
  "url": "lec-18-sec-1.html",
  "type": "Section",
  "number": "10.1",
  "title": "Fixed, Random, and Mixed Models",
  "body": " Fixed, Random, and Mixed Models   Fixed Effects Model with Factorial Treatment  Consider an factorial treatment structure in a CRD. The fixed effects model for , , and is given by where is the k-th observation at , is the overall population mean, is a fixed (non-random) main effect factor of , is a fixed (non-random) main effect factor of , is a fixed (non-random) interaction of , and is a random error. We have the following table:    Source  df  EMS  F                       no interaction    Error      Total       Random Effects Model with Factorial Treatment  A random effects model for , , and is given by where is the k-th observation at , is the overall population mean, is the main effect of factor such that , is the main effect of factor such that , is the interaction of such that , and is random error. We have a similar (but distinct!) table to the fixed effects model:    Source  df  EMS  F                          Error      Total     Note in particular that the test statistics are constructed differently. Unlike the fixed effects model, the result from testing and can be interpreted even when there exists significant evidence in favor of . If any variance components turn out to be significant, then we are interested in estimating the variance components (see below).    Mixed Effects Model with Factorial Treatment  A mixed effects model for , , and is given by where is the k-th observation at , is the overall population mean, is a fixed (non-random) main effect of factor , is a main effect of factor such that , is the interaction of such that , and is a random error. We get the following table:    Source  df  EMS  F                          Error      Total     The fixed, random, and mixed effects models can also be generalized to factorial treatment structures with more than two factors. If any one factor is random, then the interaction must also be random. For example, an factorial structure where the main effect of factor is fixed while the other factors are random gives    fixed effects  random effects    A  B,C,AB,AC,BC,ABC    The presence of significant, fixed interaction means that there are different effects of the factor A across the levels of the other factor, B. In a mixed model, the levels of factor B are randomly selected; however, random interaction in a mixed model is to account for variability of our response attributed to each combination of factors A and B. No matter what the results are for the test of , we can proceed to use the F-tests for factors A and B.   "
},
{
  "id": "lec-18-sec-2",
  "level": "1",
  "url": "lec-18-sec-2.html",
  "type": "Section",
  "number": "10.2",
  "title": "Variance Component Estimation",
  "body": " Variance Component Estimation  There are two methods to estimate the variance component: the method of moments; and restricted maximum likelihood (REML) by using PROC MIXED . For the method of moments, we equate the mean squares for random effects and the corresponding EMS and then solve for the variance components. Under the mixed effects model, equating the mean squares and the corresponding EMS gives                 Solving for each variance component leads us to see that                     A company wants to evalute the effectiveness of two different sunscreen types ( and ) with 40 subjects. For each subject, a 1-inch square was marked off on their back, under the shoulder and above the small of the back. A response is recorded based on reading the color of the skin in the square before and after the application of a fixed amount of each sunscreen. The measurement of color is extremely variable, so the company randomly selects 10 technicians from their worldwide staff to participate in the study to assess the variability in the readings due to the technician taking the readings. Four subjects, two having and two having , were randomly assigned to each technician for evaluation.     Write the appropriate model for the study    Write the appropriate hypotheses which can be tested by using the following table:    Source  df  SS  MS  EMS    Suncreen  1  4.49  4.49     Technician  9  517.49  57.50     Interaction  9  5.97  0.66     Error  20  2.64  0.13     Total  39      Test the hypotheses specified in part (b)    Make a conclusion:   Reject , thus we would conclude that the variations in the determinations of skin color due to technician differences are different for the two types of sunscreen.    Reject , thus there is a significant source of random variation due to variability from technician to technicia    Reject , thus there is significant evidence that the mean response differs for the two sunscreens       Estimate the variance components by using the method of moments.                                 "
},
{
  "id": "example-13",
  "level": "2",
  "url": "lec-18-sec-2.html#example-13",
  "type": "Example",
  "number": "10.2.1",
  "title": "",
  "body": "  A company wants to evalute the effectiveness of two different sunscreen types ( and ) with 40 subjects. For each subject, a 1-inch square was marked off on their back, under the shoulder and above the small of the back. A response is recorded based on reading the color of the skin in the square before and after the application of a fixed amount of each sunscreen. The measurement of color is extremely variable, so the company randomly selects 10 technicians from their worldwide staff to participate in the study to assess the variability in the readings due to the technician taking the readings. Four subjects, two having and two having , were randomly assigned to each technician for evaluation.     Write the appropriate model for the study    Write the appropriate hypotheses which can be tested by using the following table:    Source  df  SS  MS  EMS    Suncreen  1  4.49  4.49     Technician  9  517.49  57.50     Interaction  9  5.97  0.66     Error  20  2.64  0.13     Total  39      Test the hypotheses specified in part (b)    Make a conclusion:   Reject , thus we would conclude that the variations in the determinations of skin color due to technician differences are different for the two types of sunscreen.    Reject , thus there is a significant source of random variation due to variability from technician to technicia    Reject , thus there is significant evidence that the mean response differs for the two sunscreens       Estimate the variance components by using the method of moments.                                "
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
