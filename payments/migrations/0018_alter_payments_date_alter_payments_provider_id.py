# Generated by Django 4.2.14 on 2024-07-24 06:28

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('payments', '0017_alter_payments_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='payments',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2024, 7, 24, 6, 28, 39, 457899)),
        ),
        migrations.AlterField(
            model_name='payments',
            name='provider_id',
            field=models.CharField(blank=True, default='', max_length=10, null=True),
        ),
    ]
