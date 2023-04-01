import plotly.graph_objs as go
import plotly.offline as pyo

data = [go.Bar(
    x=['giraffes', 'orang-outan', 'éléphants'],
    y=[20, 14, 23]
)]

fig = go.Figure(data=data)

pyo.plot(fig, filename='bar.html')
