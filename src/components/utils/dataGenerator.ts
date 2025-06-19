/**
 * Generates an array of data points for Highcharts.
 * @param count Number of data points to generate
 * @returns Array of [count] values for Highcharts series
 * @example
 * generateSingleHighchartsData(10) // returns an array of 10 random numbers
 */
export function generateSingleHighchartsData(count: number): number[] {
  const data: number[] = [];
  for (let i = 0; i < count; i++) {
    data.push(Math.round(Math.random() * 100));
  }
  return data;
}

/**
 * Generates an array of data points for Highcharts with two values per point.
 * @param count Number of data points to generate
 * @returns Array of [count] pairs of values for Highcharts series
 * @example
 * generateDoubleHighchartsData(10) // returns an array of 10 pairs of random
 */
export function generateDoubleHighchartsData(count: number): [number, number][] {
  const data: [number, number][] = [];
  for (let i = 0; i < count; i++) {
    data.push([Math.round(Math.random() * 100), Math.round(Math.random() * 100)]);
  }
  return data;
}
